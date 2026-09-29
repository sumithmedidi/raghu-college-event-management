import uuid
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('coordinator', 'Faculty Coordinator'),
        ('admin', 'Administrator'),
    ]

    DEPARTMENT_CHOICES = [
        ('CSE AI-ML', 'Computer Science (AI & ML)'),
        ('CSE', 'Computer Science & Engineering'),
        ('ECE', 'Electronics & Communication Engineering'),
        ('EEE', 'Electrical & Electronics Engineering'),
        ('IT', 'Information Technology'),
        ('MECH', 'Mechanical Engineering'),
        ('CIVIL', 'Civil Engineering'),
        ('OTHER', 'Other / General'),
    ]

    YEAR_CHOICES = [
        ('1st Year', '1st Year'),
        ('2nd Year', '2nd Year'),
        ('3rd Year', '3rd Year'),
        ('4th Year', '4th Year'),
        ('Faculty', 'Faculty / Staff'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    roll_number = models.CharField(max_length=30, blank=True, null=True, help_text="e.g. CS202601")
    department = models.CharField(max_length=50, choices=DEPARTMENT_CHOICES, default='CSE AI-ML')
    year = models.CharField(max_length=20, choices=YEAR_CHOICES, default='3rd Year')
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username} ({self.get_role_display()})"


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=50, unique=True)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, default='bi-calendar-event', help_text="Bootstrap icon name, e.g., bi-laptop, bi-trophy")
    color = models.CharField(max_length=30, default='primary', help_text="Badge color: primary, success, danger, warning, info, purple")

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def event_count(self):
        return self.events.count()


class Event(models.Model):
    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='events')
    short_summary = models.CharField(max_length=250, help_text="Quick highlights for cards")
    description = models.TextField(help_text="Detailed description and rules of the event")
    venue = models.CharField(max_length=150, help_text="e.g. Seminar Hall 1, Campus Ground")
    event_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    registration_deadline = models.DateTimeField()
    max_capacity = models.PositiveIntegerField(default=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    
    # Coordinator Info
    coordinator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='coordinated_events')
    coordinator_name = models.CharField(max_length=100, default='Faculty Coordinator')
    coordinator_contact = models.CharField(max_length=150, default='events@college.edu | +91 9876543210')
    
    # Media
    banner_url = models.URLField(max_length=500, blank=True, null=True, help_text="Image URL for banner")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['event_date', 'start_time']

    def __str__(self):
        return f"{self.title} ({self.event_date})"

    @property
    def registered_count(self):
        return self.registrations.exclude(status='cancelled').count()

    @property
    def available_seats(self):
        remaining = self.max_capacity - self.registered_count
        return max(0, remaining)

    @property
    def is_registration_open(self):
        if self.status != 'upcoming':
            return False
        if timezone.now() > self.registration_deadline:
            return False
        if self.available_seats <= 0:
            return False
        return True

    @property
    def attendance_count(self):
        return self.registrations.filter(status='attended').count()


class Registration(models.Model):
    STATUS_CHOICES = [
        ('confirmed', 'Confirmed'),
        ('attended', 'Attended'),
        ('absent', 'Absent'),
        ('cancelled', 'Cancelled'),
    ]

    registration_id = models.CharField(max_length=30, unique=True, editable=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='event_registrations')
    registered_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='confirmed')
    attendance_marked = models.BooleanField(default=False)
    attendance_marked_at = models.DateTimeField(null=True, blank=True)
    notes = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        unique_together = ('event', 'user')
        ordering = ['-registered_at']

    def save(self, *args, **kwargs):
        if not self.registration_id:
            # Generate unique reference code e.g. EVT-2026-A1B2
            token = uuid.uuid4().hex[:6].upper()
            self.registration_id = f"EVT-2026-{token}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.registration_id} - {self.user.username} ({self.event.title})"


class Announcement(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='announcements')
    title = models.CharField(max_length=200)
    message = models.TextField()
    is_important = models.BooleanField(default=False)
    posted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.event.title}] {self.title}"


class Certificate(models.Model):
    certificate_id = models.CharField(max_length=40, unique=True, editable=False)
    registration = models.OneToOneField(Registration, on_delete=models.CASCADE, related_name='certificate')
    issued_at = models.DateTimeField(auto_now_add=True)
    signer_name = models.CharField(max_length=100, default='Faculty Coordinator')
    signer_designation = models.CharField(max_length=100, default='Faculty Coordinator & Event Incharge')

    def save(self, *args, **kwargs):
        if not self.certificate_id:
            token = uuid.uuid4().hex[:8].upper()
            self.certificate_id = f"CERT-CEMS-{token}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.certificate_id} - {self.registration.user.get_full_name() or self.registration.user.username}"
