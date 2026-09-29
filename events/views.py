import csv
import json
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.utils.text import slugify
from django.utils import timezone
from django.db.models import Count, Q
from django.http import HttpResponse, JsonResponse

from .models import Event, Category, Registration, Announcement, Certificate, UserProfile
from .forms import EventForm, AnnouncementForm, StudentRegistrationForm


def is_coordinator_or_admin(user):
    if not user.is_authenticated:
        return False
    if user.is_superuser or user.is_staff:
        return True
    try:
        return user.profile.role in ['coordinator', 'admin']
    except Exception:
        return False


def home(request):
    categories = Category.objects.all()
    upcoming_events = Event.objects.filter(status='upcoming').order_by('event_date', 'start_time')[:6]
    completed_events = Event.objects.filter(status='completed')[:3]
    
    # Global metrics
    total_events = Event.objects.count()
    total_registrations = Registration.objects.exclude(status='cancelled').count()
    total_students = UserProfile.objects.filter(role='student').count()
    total_certificates = Certificate.objects.count()

    latest_announcements = Announcement.objects.select_related('event', 'posted_by').order_by('-created_at')[:4]

    context = {
        'categories': categories,
        'upcoming_events': upcoming_events,
        'completed_events': completed_events,
        'total_events': total_events,
        'total_registrations': total_registrations,
        'total_students': total_students,
        'total_certificates': total_certificates,
        'latest_announcements': latest_announcements,
    }
    return render(request, 'events/home.html', context)


def event_list(request):
    events = Event.objects.all().order_by('event_date')
    categories = Category.objects.all()

    # Filtering
    query = request.GET.get('q', '').strip()
    category_slug = request.GET.get('category', '').strip()
    status_filter = request.GET.get('status', '').strip()

    if query:
        events = events.filter(
            Q(title__icontains=query) |
            Q(description__icontains=query) |
            Q(venue__icontains=query) |
            Q(coordinator_name__icontains=query)
        )

    if category_slug:
        events = events.filter(category__slug=category_slug)

    if status_filter:
        events = events.filter(status=status_filter)

    context = {
        'events': events,
        'categories': categories,
        'selected_query': query,
        'selected_category': category_slug,
        'selected_status': status_filter,
    }
    return render(request, 'events/event_list.html', context)


def event_detail(request, slug):
    event = get_object_or_404(Event, slug=slug)
    announcements = event.announcements.all().order_by('-created_at')
    
    user_registered = False
    user_registration = None
    if request.user.is_authenticated:
        user_registration = Registration.objects.filter(event=event, user=request.user).first()
        if user_registration and user_registration.status != 'cancelled':
            user_registered = True

    context = {
        'event': event,
        'announcements': announcements,
        'user_registered': user_registered,
        'user_registration': user_registration,
        'is_coordinator': is_coordinator_or_admin(request.user),
    }
    return render(request, 'events/event_detail.html', context)


@login_required
def register_event(request, slug):
    event = get_object_or_404(Event, slug=slug)

    # Check capacity & open status
    if not event.is_registration_open:
        messages.error(request, "Registration is currently closed or capacity is full for this event.")
        return redirect('event_detail', slug=slug)

    # Check existing registration
    reg = Registration.objects.filter(event=event, user=request.user).first()
    if reg:
        if reg.status == 'cancelled':
            reg.status = 'confirmed'
            reg.save()
            messages.success(request, f"Registration re-activated successfully for {event.title}!")
            return redirect('registration_pass', reg_id=reg.registration_id)
        else:
            messages.info(request, "You are already registered for this event.")
            return redirect('registration_pass', reg_id=reg.registration_id)

    # Create new registration
    new_reg = Registration.objects.create(
        event=event,
        user=request.user,
        status='confirmed'
    )
    messages.success(request, f"Registration successful! Your Pass ID is {new_reg.registration_id}")
    return redirect('registration_pass', reg_id=new_reg.registration_id)


@login_required
def cancel_registration(request, reg_id):
    reg = get_object_or_404(Registration, registration_id=reg_id, user=request.user)
    if reg.attendance_marked:
        messages.error(request, "Cannot cancel registration after event attendance has been recorded.")
        return redirect('my_registrations')

    reg.status = 'cancelled'
    reg.save()
    messages.warning(request, f"Your registration for {reg.event.title} has been cancelled.")
    return redirect('my_registrations')


@login_required
def registration_pass(request, reg_id):
    reg = get_object_or_404(Registration, registration_id=reg_id)
    # Check access: student himself, coordinator, or admin
    if reg.user != request.user and not is_coordinator_or_admin(request.user):
        messages.error(request, "Unauthorized access to pass.")
        return redirect('home')

    context = {
        'registration': reg,
        'event': reg.event,
        'user_profile': getattr(reg.user, 'profile', None),
    }
    return render(request, 'events/registration_pass.html', context)


@login_required
def my_registrations(request):
    registrations = Registration.objects.filter(user=request.user).select_related('event', 'event__category').order_by('-registered_at')
    
    # Active registrations
    active_regs = [r for r in registrations if r.status in ['confirmed', 'attended']]
    attended_regs = [r for r in registrations if r.status == 'attended']

    context = {
        'registrations': registrations,
        'active_count': len(active_regs),
        'attended_count': len(attended_regs),
    }
    return render(request, 'events/my_registrations.html', context)


@login_required
def certificate_view(request, cert_id):
    cert = get_object_or_404(Certificate, certificate_id=cert_id)
    # Security: student owner or coordinator
    if cert.registration.user != request.user and not is_coordinator_or_admin(request.user):
        messages.error(request, "Unauthorized to view this certificate.")
        return redirect('home')

    context = {
        'cert': cert,
        'reg': cert.registration,
        'event': cert.registration.event,
        'student': cert.registration.user,
        'profile': getattr(cert.registration.user, 'profile', None),
    }
    return render(request, 'events/certificate.html', context)


# ================= COORDINATOR & ADMIN VIEWS =================

@login_required
def coordinator_dashboard(request):
    if not is_coordinator_or_admin(request.user):
        messages.error(request, "Access restricted to Faculty Coordinators and Administrators.")
        return redirect('home')

    # All events or user's coordinated events
    events = Event.objects.all().order_by('-event_date')
    
    total_events = events.count()
    all_registrations = Registration.objects.exclude(status='cancelled')
    total_registrations = all_registrations.count()
    total_attended = all_registrations.filter(status='attended').count()
    attendance_rate = round((total_attended / total_registrations * 100), 1) if total_registrations > 0 else 0

    # Analytics Data for Chart.js
    categories = Category.objects.all()
    cat_names = [c.name for c in categories]
    cat_counts = [Event.objects.filter(category=c).count() for c in categories]
    
    # Top 5 events by registrations
    event_reg_pairs = []
    for evt in events[:5]:
        event_reg_pairs.append({
            'title': evt.title[:25] + ('...' if len(evt.title) > 25 else ''),
            'count': evt.registered_count
        })

    recent_registrations = Registration.objects.select_related('user', 'event').order_by('-registered_at')[:8]

    context = {
        'events': events,
        'total_events': total_events,
        'total_registrations': total_registrations,
        'total_attended': total_attended,
        'attendance_rate': attendance_rate,
        'recent_registrations': recent_registrations,
        'cat_names_json': json.dumps(cat_names),
        'cat_counts_json': json.dumps(cat_counts),
        'event_titles_json': json.dumps([p['title'] for p in event_reg_pairs]),
        'event_counts_json': json.dumps([p['count'] for p in event_reg_pairs]),
    }
    return render(request, 'events/coordinator_dashboard.html', context)


@login_required
def event_create(request):
    if not is_coordinator_or_admin(request.user):
        messages.error(request, "Access restricted.")
        return redirect('home')

    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            event = form.save(commit=False)
            event.coordinator = request.user
            base_slug = slugify(event.title)
            unique_slug = base_slug
            idx = 1
            while Event.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{base_slug}-{idx}"
                idx += 1
            event.slug = unique_slug
            event.save()
            messages.success(request, f"Event '{event.title}' created successfully!")
            return redirect('coordinator_dashboard')
    else:
        form = EventForm(initial={
            'coordinator_name': request.user.get_full_name() or request.user.username,
            'coordinator_contact': f"{request.user.email} | +91 9876543210",
            'max_capacity': 100,
        })

    return render(request, 'events/event_form.html', {'form': form, 'title': 'Create New College Event'})


@login_required
def event_edit(request, slug):
    if not is_coordinator_or_admin(request.user):
        messages.error(request, "Access restricted.")
        return redirect('home')

    event = get_object_or_404(Event, slug=slug)
    if request.method == 'POST':
        form = EventForm(request.POST, instance=event)
        if form.is_valid():
            form.save()
            messages.success(request, f"Event '{event.title}' updated successfully!")
            return redirect('coordinator_dashboard')
    else:
        form = EventForm(instance=event)

    return render(request, 'events/event_form.html', {'form': form, 'title': f'Edit Event: {event.title}', 'event': event})


@login_required
def event_delete(request, slug):
    if not is_coordinator_or_admin(request.user):
        messages.error(request, "Access restricted.")
        return redirect('home')

    event = get_object_or_404(Event, slug=slug)
    if request.method == 'POST':
        title = event.title
        event.delete()
        messages.success(request, f"Event '{title}' has been deleted.")
        return redirect('coordinator_dashboard')

    return render(request, 'events/event_confirm_delete.html', {'event': event})


@login_required
def event_participants(request, slug):
    if not is_coordinator_or_admin(request.user):
        messages.error(request, "Access restricted.")
        return redirect('home')

    event = get_object_or_404(Event, slug=slug)
    registrations = event.registrations.select_related('user', 'user__profile').order_by('user__profile__roll_number', 'registered_at')

    context = {
        'event': event,
        'registrations': registrations,
        'announcement_form': AnnouncementForm(),
    }
    return render(request, 'events/event_participants.html', context)


@login_required
def toggle_attendance(request, reg_id):
    if not is_coordinator_or_admin(request.user):
        return JsonResponse({'status': 'error', 'message': 'Unauthorized'}, status=403)

    reg = get_object_or_404(Registration, registration_id=reg_id)
    
    if reg.status == 'attended':
        reg.status = 'confirmed'
        reg.attendance_marked = False
        reg.attendance_marked_at = None
        # Remove certificate if any
        Certificate.objects.filter(registration=reg).delete()
    else:
        reg.status = 'attended'
        reg.attendance_marked = True
        reg.attendance_marked_at = timezone.now()
        # Generate Certificate
        Certificate.objects.get_or_create(
            registration=reg,
            defaults={
                'signer_name': reg.event.coordinator_name or 'Faculty Coordinator',
                'signer_designation': 'Faculty Coordinator & Event Incharge'
            }
        )
    reg.save()

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'new_status': reg.status,
            'attendance_marked': reg.attendance_marked
        })

    messages.success(request, f"Attendance status updated for {reg.user.get_full_name() or reg.user.username}.")
    return redirect('event_participants', slug=reg.event.slug)


@login_required
def post_announcement(request, slug):
    if not is_coordinator_or_admin(request.user):
        messages.error(request, "Access restricted.")
        return redirect('home')

    event = get_object_or_404(Event, slug=slug)
    if request.method == 'POST':
        form = AnnouncementForm(request.POST)
        if form.is_valid():
            announcement = form.save(commit=False)
            announcement.event = event
            announcement.posted_by = request.user
            announcement.save()
            messages.success(request, f"Announcement broadcasted to participants of {event.title}!")
    
    return redirect('event_participants', slug=slug)


@login_required
def export_participants_csv(request, slug):
    if not is_coordinator_or_admin(request.user):
        return HttpResponse("Unauthorized", status=403)

    event = get_object_or_404(Event, slug=slug)
    registrations = event.registrations.select_related('user', 'user__profile').all()

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = f'attachment; filename="Participants_{slug}.csv"'

    writer = csv.writer(response)
    writer.writerow(['Reg ID', 'Roll Number', 'Full Name', 'Department', 'Year', 'Email', 'Phone', 'Registration Date', 'Attendance Status'])

    for reg in registrations:
        profile = getattr(reg.user, 'profile', None)
        writer.writerow([
            reg.registration_id,
            profile.roll_number if profile else 'N/A',
            reg.user.get_full_name() or reg.user.username,
            profile.department if profile else 'N/A',
            profile.year if profile else 'N/A',
            reg.user.email,
            profile.phone_number if profile else 'N/A',
            reg.registered_at.strftime('%Y-%m-%d %H:%M'),
            reg.get_status_display()
        ])

    return response


# ================= AUTHENTICATION & DEMO LOGIN =================

def user_login(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        u = request.POST.get('username')
        p = request.POST.get('password')
        user = authenticate(request, username=u, password=p)
        if user:
            login(request, user)
            messages.success(request, f"Welcome back, {user.first_name or user.username}!")
            next_url = request.GET.get('next') or 'home'
            return redirect(next_url)
        else:
            messages.error(request, "Invalid username or password.")

    return render(request, 'events/login.html')


def user_register(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        form = StudentRegistrationForm(request.POST)
        if form.is_valid():
            u = form.save(commit=False)
            u.set_password(form.cleaned_data['password'])
            u.save()

            UserProfile.objects.create(
                user=u,
                role='student',
                roll_number=form.cleaned_data['roll_number'],
                department=form.cleaned_data['department'],
                year=form.cleaned_data['year'],
                phone_number=form.cleaned_data['phone_number']
            )

            login(request, u)
            messages.success(request, f"Account created successfully! Welcome to College Event Portal, {u.first_name}!")
            return redirect('home')
    else:
        form = StudentRegistrationForm()

    return render(request, 'events/register.html', {'form': form})


def user_logout(request):
    logout(request)
    messages.info(request, "You have been logged out.")
    return redirect('home')


def quick_demo_login(request, role):
    """Convenience helper for presentations & evaluation to test student, coordinator, or admin instantly."""
    user_map = {
        'student': 'student1',
        'student2': 'student2',
        'coordinator': 'coordinator',
        'admin': 'admin'
    }
    username = user_map.get(role, 'student1')
    try:
        user = User.objects.get(username=username)
        login(request, user)
        messages.success(request, f"Logged in as demo {role.upper()} ({user.get_full_name() or user.username})")
        if role in ['coordinator', 'admin']:
            return redirect('coordinator_dashboard')
        return redirect('home')
    except User.DoesNotExist:
        messages.error(request, f"Demo user for {role} does not exist.")
        return redirect('login')
