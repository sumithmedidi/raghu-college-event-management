from django import forms
from django.contrib.auth.models import User
from .models import Event, Announcement, UserProfile


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = [
            'title', 'category', 'short_summary', 'description', 
            'venue', 'event_date', 'start_time', 'end_time', 
            'registration_deadline', 'max_capacity', 'status',
            'coordinator_name', 'coordinator_contact', 'banner_url'
        ]
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. AI-ML Hackathon 2026'}),
            'category': forms.Select(attrs={'class': 'form-select'}),
            'short_summary': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'One line summary'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'rows': 4, 'placeholder': 'Full details, rules, eligibility'}),
            'venue': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. Central Auditorium'}),
            'event_date': forms.DateInput(attrs={'class': 'form-control', 'type': 'date'}),
            'start_time': forms.TimeInput(attrs={'class': 'form-control', 'type': 'time'}),
            'end_time': forms.TimeInput(attrs={'class': 'form-control', 'type': 'time'}),
            'registration_deadline': forms.DateTimeInput(attrs={'class': 'form-control', 'type': 'datetime-local'}),
            'max_capacity': forms.NumberInput(attrs={'class': 'form-control', 'min': 1}),
            'status': forms.Select(attrs={'class': 'form-select'}),
            'coordinator_name': forms.TextInput(attrs={'class': 'form-control'}),
            'coordinator_contact': forms.TextInput(attrs={'class': 'form-control'}),
            'banner_url': forms.URLInput(attrs={'class': 'form-control', 'placeholder': 'https://images.unsplash.com/...'}),
        }


class AnnouncementForm(forms.ModelForm):
    class Meta:
        model = Announcement
        fields = ['title', 'message', 'is_important']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Announcement title'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 3, 'placeholder': 'Important message or update for students'}),
            'is_important': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }


class StudentRegistrationForm(forms.ModelForm):
    username = forms.CharField(max_length=150, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Choose username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}))
    confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm Password'}))
    first_name = forms.CharField(max_length=30, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}))
    last_name = forms.CharField(max_length=30, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'college email@college.edu'}))
    
    roll_number = forms.CharField(max_length=30, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'e.g. CS202601'}))
    department = forms.ChoiceField(choices=UserProfile.DEPARTMENT_CHOICES, widget=forms.Select(attrs={'class': 'form-select'}))
    year = forms.ChoiceField(choices=UserProfile.YEAR_CHOICES, widget=forms.Select(attrs={'class': 'form-select'}))
    phone_number = forms.CharField(max_length=15, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': '+91 9876543210'}))

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

    def clean(self):
        cleaned_data = super().clean()
        pwd = cleaned_data.get('password')
        cpwd = cleaned_data.get('confirm_password')
        if pwd and cpwd and pwd != cpwd:
            self.add_error('confirm_password', 'Passwords do not match.')
        return cleaned_data
