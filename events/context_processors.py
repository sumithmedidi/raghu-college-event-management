from .models import Category

def event_categories(request):
    """Makes categories globally available across all templates and navigation."""
    try:
        categories = Category.objects.all()
    except Exception:
        categories = []
    return {
        'all_categories': categories,
    }
