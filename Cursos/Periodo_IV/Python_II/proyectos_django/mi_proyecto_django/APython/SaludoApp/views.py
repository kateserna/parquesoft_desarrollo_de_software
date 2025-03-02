from django.http import HttpResponse

def saludo_python(request):
    return HttpResponse("Mi primer proyecto en Django")
