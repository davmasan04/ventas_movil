from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def usuario(request, nombre):
  return HttpResponse(f"Hola {nombre}") 