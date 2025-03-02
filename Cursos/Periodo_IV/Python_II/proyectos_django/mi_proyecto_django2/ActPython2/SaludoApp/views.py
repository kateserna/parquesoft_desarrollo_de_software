from django.http import HttpResponse

def Saludo_Python(request):
    return HttpResponse("Mi primer proyecto Django virtual")