from django.contrib import admin
from .models import UserProfile, Category, Event, Registration, Announcement, Certificate


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'roll_number', 'department', 'year', 'phone_number')
    list_filter = ('role', 'department', 'year')
    search_fields = ('user__username', 'user__first_name', 'user__last_name', 'roll_number')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'color', 'icon', 'event_count')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'event_date', 'start_time', 'venue', 'status', 'registered_count', 'available_seats')
    list_filter = ('status', 'category', 'event_date')
    search_fields = ('title', 'venue', 'description', 'coordinator_name')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'event_date'


@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('registration_id', 'event', 'user', 'status', 'attendance_marked', 'registered_at')
    list_filter = ('status', 'attendance_marked', 'event')
    search_fields = ('registration_id', 'user__username', 'user__first_name', 'event__title')


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'event', 'posted_by', 'is_important', 'created_at')
    list_filter = ('is_important', 'created_at')
    search_fields = ('title', 'message', 'event__title')


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('certificate_id', 'registration', 'signer_name', 'issued_at')
    search_fields = ('certificate_id', 'registration__registration_id', 'registration__user__username')
