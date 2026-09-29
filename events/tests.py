from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta
from .models import Event, Category, Registration, Certificate, UserProfile


class CEMSTestCase(TestCase):
    def setUp(self):
        self.client = Client()

        # Create Category
        self.category = Category.objects.create(
            name="Technical",
            slug="technical",
            description="Tech events",
            icon="bi-laptop",
            color="primary"
        )

        # Create Student User
        self.student_user = User.objects.create_user(
            username="student_test",
            email="student_test@college.edu",
            password="testpassword123",
            first_name="Test",
            last_name="Student"
        )
        self.student_profile = UserProfile.objects.create(
            user=self.student_user,
            role="student",
            roll_number="CS202699",
            department="CSE",
            year="3rd Year"
        )

        # Create Coordinator User
        self.coord_user = User.objects.create_user(
            username="coord_test",
            email="coord_test@college.edu",
            password="testpassword123",
            first_name="Dr.",
            last_name="Coordinator"
        )
        self.coord_profile = UserProfile.objects.create(
            user=self.coord_user,
            role="coordinator",
            department="CSE"
        )

        # Create Event
        now = timezone.now()
        self.event = Event.objects.create(
            title="National Hackathon 2026",
            slug="national-hackathon-2026",
            category=self.category,
            short_summary="24h Hackathon",
            description="Full guidelines and rules",
            venue="Tech Lab 1",
            event_date=(now + timedelta(days=5)).date(),
            start_time="09:00:00",
            end_time="17:00:00",
            registration_deadline=now + timedelta(days=4),
            max_capacity=2,
            status="upcoming",
            coordinator=self.coord_user
        )

    def test_event_capacity_and_open_status(self):
        self.assertTrue(self.event.is_registration_open)
        self.assertEqual(self.event.available_seats, 2)

    def test_student_registration_flow(self):
        self.client.login(username="student_test", password="testpassword123")
        response = self.client.get(f'/events/{self.event.slug}/register/', follow=True)
        self.assertEqual(response.status_code, 200)

        # Verify Registration Created
        reg = Registration.objects.filter(event=self.event, user=self.student_user).first()
        self.assertIsNotNone(reg)
        self.assertTrue(reg.registration_id.startswith("EVT-2026-"))
        self.assertEqual(self.event.registered_count, 1)
        self.assertEqual(self.event.available_seats, 1)

    def test_duplicate_registration_prevention(self):
        # Register once
        Registration.objects.create(event=self.event, user=self.student_user, status='confirmed')
        self.client.login(username="student_test", password="testpassword123")

        # Attempt to register again
        self.client.get(f'/events/{self.event.slug}/register/', follow=True)
        count = Registration.objects.filter(event=self.event, user=self.student_user).count()
        self.assertEqual(count, 1)

    def test_attendance_and_certificate_unlock(self):
        reg = Registration.objects.create(event=self.event, user=self.student_user, status='confirmed')
        self.assertFalse(reg.attendance_marked)

        # Log in as coordinator to toggle attendance
        self.client.login(username="coord_test", password="testpassword123")
        response = self.client.post(f'/registration/attendance/{reg.registration_id}/', follow=True)
        self.assertEqual(response.status_code, 200)

        reg.refresh_from_db()
        self.assertTrue(reg.attendance_marked)
        self.assertEqual(reg.status, 'attended')

        # Verify Certificate generated automatically
        cert = Certificate.objects.filter(registration=reg).first()
        self.assertIsNotNone(cert)
        self.assertTrue(cert.certificate_id.startswith("CERT-CEMS-"))
