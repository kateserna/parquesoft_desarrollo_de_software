from django.urls import path
from .views import saludo_python

urlpatterns = [
    path('', saludo_python, name='Mi primer proyecto en django')
]