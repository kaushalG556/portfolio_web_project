# from django.shortcuts import render

# Home view


from django.shortcuts import render,redirect,HttpResponse
from .models import Skill, Project, Experience,ContactMessage
from .forms import ContactForm


def home(request):
    return render(request, 'index.html')

def portfolio(request):
    skills = Skill.objects.all()
    projects = Project.objects.all()
    experiences = Experience.objects.all()
    return render(request, 'portfolio.html', {
        'skills': skills,
        'projects': projects,
        'experiences': experiences,
    })

def resume(request):
    return render(request, 'resume.html')

# About view
def about(request):
    return render(request, 'about.html')



# views.py


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save the form data to the database
            form.save()
            # Redirect to a thank you page or show a success message
            return redirect('/')  # You can create a 'thank_you' page for this purpose

    else:
        form = ContactForm()

    return render(request, 'contact.html', {'form': form})
