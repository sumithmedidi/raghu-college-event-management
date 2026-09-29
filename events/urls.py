from django.urls import path
from . import views

urlpatterns = [
    # Public & Discovery
    path('', views.home, name='home'),
    path('events/', views.event_list, name='event_list'),
    path('events/<slug:slug>/', views.event_detail, name='event_detail'),
    
    # Student Actions
    path('events/<slug:slug>/register/', views.register_event, name='register_event'),
    path('registration/pass/<str:reg_id>/', views.registration_pass, name='registration_pass'),
    path('registration/cancel/<str:reg_id>/', views.cancel_registration, name='cancel_registration'),
    path('my-events/', views.my_registrations, name='my_registrations'),
    path('certificate/<str:cert_id>/', views.certificate_view, name='certificate_view'),

    # Coordinator & Admin
    path('dashboard/', views.coordinator_dashboard, name='coordinator_dashboard'),
    path('events/manage/create/', views.event_create, name='event_create'),
    path('events/manage/<slug:slug>/edit/', views.event_edit, name='event_edit'),
    path('events/manage/<slug:slug>/delete/', views.event_delete, name='event_delete'),
    path('events/manage/<slug:slug>/participants/', views.event_participants, name='event_participants'),
    path('events/manage/<slug:slug>/announcement/', views.post_announcement, name='post_announcement'),
    path('events/manage/<slug:slug>/export-csv/', views.export_participants_csv, name='export_participants_csv'),
    path('registration/attendance/<str:reg_id>/', views.toggle_attendance, name='toggle_attendance'),

    # Authentication
    path('login/', views.user_login, name='login'),
    path('register/', views.user_register, name='register'),
    path('logout/', views.user_logout, name='logout'),
    path('demo-login/<str:role>/', views.quick_demo_login, name='quick_demo_login'),
]
