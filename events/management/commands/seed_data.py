import datetime
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.utils import timezone
from events.models import UserProfile, Category, Event, Registration, Announcement, Certificate


class Command(BaseCommand):
    help = 'Seeds initial sample data for College Event Management System'

    def handle(self, *args, **options):
        self.stdout.write("Seeding data...")

        # 1. Categories
        categories_data = [
            {
                'name': 'Technical',
                'slug': 'technical',
                'description': 'Hackathons, coding contests, technical paper presentations, and robotics competitions.',
                'icon': 'bi-cpu-fill',
                'color': 'primary'
            },
            {
                'name': 'Cultural',
                'slug': 'cultural',
                'description': 'Music, dance, drama, fashion shows, fine arts, and literary competitions.',
                'icon': 'bi-music-note-beamed',
                'color': 'danger'
            },
            {
                'name': 'Sports',
                'slug': 'sports',
                'description': 'Inter-department cricket, football, basketball, badminton, chess, and athletic meets.',
                'icon': 'bi-trophy-fill',
                'color': 'warning'
            },
            {
                'name': 'Workshops',
                'slug': 'workshops',
                'description': 'Hands-on practical training on cutting-edge technologies and industry toolkits.',
                'icon': 'bi-code-slash',
                'color': 'info'
            },
            {
                'name': 'Seminars',
                'slug': 'seminars',
                'description': 'Expert talks, guest lectures, industry keynote presentations, and research symposiums.',
                'icon': 'bi-easel-fill',
                'color': 'success'
            },
        ]

        cat_objs = {}
        for cdata in categories_data:
            cat, created = Category.objects.get_or_create(
                slug=cdata['slug'],
                defaults=cdata
            )
            cat_objs[cdata['slug']] = cat

        self.stdout.write("Categories created/verified.")

        # 2. Users & Profiles
        # Admin
        admin_user, _ = User.objects.get_or_create(
            username='admin',
            defaults={
                'first_name': 'Raghu',
                'last_name': 'Admin',
                'email': 'admin@raghuenggcollege.in',
                'is_staff': True,
                'is_superuser': True
            }
        )
        admin_user.set_password('adminpassword123')
        admin_user.save()
        UserProfile.objects.update_or_create(
            user=admin_user,
            defaults={'role': 'admin', 'department': 'Computer Science & Engineering', 'year': 'Faculty', 'phone_number': '+91 8922 255555'}
        )

        # Faculty Coordinator
        coord_user, _ = User.objects.get_or_create(
            username='coordinator',
            defaults={
                'first_name': 'Dr. R.',
                'last_name': 'Kameswara Rao',
                'email': 'events@raghuenggcollege.in',
                'is_staff': True,
            }
        )
        coord_user.set_password('coordinator123')
        coord_user.save()
        UserProfile.objects.update_or_create(
            user=coord_user,
            defaults={'role': 'coordinator', 'department': 'CSE & AI-ML', 'year': 'Faculty', 'phone_number': '+91 98481 23456'}
        )

        # Student 1
        student1, _ = User.objects.get_or_create(
            username='student1',
            defaults={
                'first_name': 'Aarav',
                'last_name': 'Sharma',
                'email': 'aarav.24cse@raghuenggcollege.in',
            }
        )
        student1.set_password('student123')
        student1.save()
        UserProfile.objects.update_or_create(
            user=student1,
            defaults={
                'role': 'student',
                'roll_number': '24981A0501',
                'department': 'Computer Science & Engineering',
                'year': '3rd Year',
                'phone_number': '+91 9123456780'
            }
        )

        # Student 2
        student2, _ = User.objects.get_or_create(
            username='student2',
            defaults={
                'first_name': 'Pooja',
                'last_name': 'Venkatesh',
                'email': 'pooja.24aiml@raghuenggcollege.in',
            }
        )
        student2.set_password('student123')
        student2.save()
        UserProfile.objects.update_or_create(
            user=student2,
            defaults={
                'role': 'student',
                'roll_number': '24981A0502',
                'department': 'Artificial Intelligence & Machine Learning',
                'year': '3rd Year',
                'phone_number': '+91 9123456781'
            }
        )

        self.stdout.write("Users created/verified.")

        # 3. Events
        now = timezone.now()
        today = now.date()

        events_data = [
            {
                'title': 'REC AI-ML National Hackathon 2026',
                'slug': 'rec-aiml-national-hackathon-2026',
                'category': cat_objs['technical'],
                'short_summary': '24-hour sprint at Raghu Engineering College to build AI-powered solutions for smart campus and healthcare.',
                'description': 'Participate in the flagship 24-Hour National AI & Machine Learning Hackathon at Raghu Engineering College! Open to all undergraduate engineering students. Bring your laptops, ideate innovative solutions using computer vision, NLP, and agentic systems. Exciting cash prizes of INR 50,000, trophies, and internship interview opportunities with tech sponsors.',
                'venue': 'APJ Abdul Kalam Computing Center - REC Central Block',
                'event_date': today + datetime.timedelta(days=7),
                'start_time': datetime.time(9, 30),
                'end_time': datetime.time(17, 30),
                'registration_deadline': now + datetime.timedelta(days=5),
                'max_capacity': 120,
                'status': 'upcoming',
                'coordinator': coord_user,
                'coordinator_name': 'Dr. R. Kameswara Rao',
                'coordinator_contact': 'events@raghuenggcollege.in | +91 98481 23456',
                'banner_url': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80'
            },
            {
                'title': 'Tarang 2026: REC Annual Cultural Fest',
                'slug': 'rec-tarang-2026-cultural-fest',
                'category': cat_objs['cultural'],
                'short_summary': 'The biggest celebration of music, rhythm, theatre, and creative expression at REC Visakhapatnam campus.',
                'description': 'Experience the electrifying vibe of Tarang 2026 at Raghu Engineering College! Featuring Solo & Group Singing, Western & Classical Dance, Battle of the Bands, Street Play (Nukkad Natak), and campus art gallery exhibitions. Refreshments provided to all participants.',
                'venue': 'CV Raman Open Air Amphitheatre - REC Campus',
                'event_date': today + datetime.timedelta(days=14),
                'start_time': datetime.time(16, 0),
                'end_time': datetime.time(21, 30),
                'registration_deadline': now + datetime.timedelta(days=12),
                'max_capacity': 350,
                'status': 'upcoming',
                'coordinator': coord_user,
                'coordinator_name': 'Prof. K. Rambabu',
                'coordinator_contact': 'cultural.rec@raghuenggcollege.in | +91 8922 255555',
                'banner_url': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1000&auto=format&fit=crop&q=80'
            },
            {
                'title': 'Hands-on Workshop: Deep Learning with PyTorch & HuggingFace',
                'slug': 'rec-deep-learning-pytorch-workshop',
                'category': cat_objs['workshops'],
                'short_summary': 'Step-by-step masterclass on building and training neural networks using PyTorch & HuggingFace.',
                'description': 'Designed specifically for REC AI-ML students and enthusiasts. Topics include Tensor operations, CNN architecture design, Transfer Learning with ResNet, and fine-tuning Transformer models. Pre-requisite: Basic Python proficiency. REC accredited certificates will be issued to all active attendees.',
                'venue': 'Visvesvaraya Seminar Hall - Tech Park 2nd Floor',
                'event_date': today + datetime.timedelta(days=3),
                'start_time': datetime.time(10, 0),
                'end_time': datetime.time(16, 0),
                'registration_deadline': now + datetime.timedelta(days=2),
                'max_capacity': 60,
                'status': 'upcoming',
                'coordinator': coord_user,
                'coordinator_name': 'Dr. S. Satyanarayana',
                'coordinator_contact': 'events@raghuenggcollege.in | +91 98481 23456',
                'banner_url': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80'
            },
            {
                'title': 'REC Inter-Department Cricket & Badminton Championship',
                'slug': 'rec-inter-dept-sports-championship-2026',
                'category': cat_objs['sports'],
                'short_summary': 'Annual inter-department athletic championship clash across cricket, badminton and table tennis.',
                'description': 'Represent your department at Raghu Engineering College! League stage matches followed by semifinals and grand finale. Trophies, medals, and best athlete awards will be felicitated by Principal Dr. Ch. Srinivasu during the closing ceremony.',
                'venue': 'REC Sports Complex & Main Cricket Ground',
                'event_date': today + datetime.timedelta(days=10),
                'start_time': datetime.time(8, 0),
                'end_time': datetime.time(18, 0),
                'registration_deadline': now + datetime.timedelta(days=8),
                'max_capacity': 180,
                'status': 'upcoming',
                'coordinator': coord_user,
                'coordinator_name': 'Physical Director REC',
                'coordinator_contact': 'sports@raghuenggcollege.in | +91 8922 255555',
                'banner_url': 'https://images.unsplash.com/photo-1531415074868-036b107e775a?w=1000&auto=format&fit=crop&q=80'
            },
            {
                'title': 'Guest Seminar: Next Horizon in Generative AI & Autonomous Agents',
                'slug': 'rec-generative-ai-industry-seminar',
                'category': cat_objs['seminars'],
                'short_summary': 'Distinguished tech keynote on LLMs, Autonomous Agent Systems, and Global Career Horizons.',
                'description': 'Distinguished tech keynote session with industry senior architects exploring production deployments of LLMs, agentic workflows, and future careers in Artificial Intelligence. Q&A session with tea and networking.',
                'venue': 'Radhakrishnan Memorial Auditorium - REC Main Block',
                'event_date': today - datetime.timedelta(days=4), # Completed event for demonstration
                'start_time': datetime.time(11, 0),
                'end_time': datetime.time(13, 30),
                'registration_deadline': now - datetime.timedelta(days=6),
                'max_capacity': 200,
                'status': 'completed',
                'coordinator': coord_user,
                'coordinator_name': 'Dr. Ch. Srinivasu (Principal)',
                'coordinator_contact': 'principal@raghuenggcollege.in | +91 8922 255555',
                'banner_url': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&auto=format&fit=crop&q=80'
            }
        ]

        event_objs = {}
        for edata in events_data:
            slug = edata['slug']
            evt, created = Event.objects.get_or_create(
                slug=slug,
                defaults=edata
            )
            event_objs[slug] = evt

        self.stdout.write("Events created/verified.")

        # 4. Registrations
        # Register student1 to Hackathon (Confirmed)
        reg1, _ = Registration.objects.get_or_create(
            event=event_objs['rec-aiml-national-hackathon-2026'],
            user=student1,
            defaults={'status': 'confirmed'}
        )

        # Register student2 to Hackathon (Confirmed)
        reg2, _ = Registration.objects.get_or_create(
            event=event_objs['rec-aiml-national-hackathon-2026'],
            user=student2,
            defaults={'status': 'confirmed'}
        )

        # Register student1 to Completed Seminar (Attended + Certificate)
        reg3, _ = Registration.objects.get_or_create(
            event=event_objs['rec-generative-ai-industry-seminar'],
            user=student1,
            defaults={
                'status': 'attended',
                'attendance_marked': True,
                'attendance_marked_at': now - datetime.timedelta(days=4)
            }
        )

        # Generate Certificate for reg3
        Certificate.objects.get_or_create(
            registration=reg3,
            defaults={
                'signer_name': 'Dr. Ch. Srinivasu',
                'signer_designation': 'Principal, Raghu Engineering College'
            }
        )

        # 5. Announcements
        Announcement.objects.get_or_create(
            event=event_objs['rec-aiml-national-hackathon-2026'],
            title='Problem Statements will be released at 9:00 AM Sharp',
            defaults={
                'message': 'All registered participants are requested to report to APJ Abdul Kalam Computing Center by 8:45 AM. High-speed Wi-Fi credentials will be distributed at registration desk.',
                'is_important': True,
                'posted_by': coord_user
            }
        )

        Announcement.objects.get_or_create(
            event=event_objs['rec-deep-learning-pytorch-workshop'],
            title='Software Prerequisites: Install Anaconda & VS Code',
            defaults={
                'message': 'Please pre-install Anaconda or Miniconda with Python 3.11+ and VS Code on your personal laptops before arriving.',
                'is_important': False,
                'posted_by': coord_user
            }
        )

        self.stdout.write(self.style.SUCCESS("Database seeded successfully with Raghu Engineering College realistic data!"))
