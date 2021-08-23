from django.shortcuts import render
from django.http import HttpResponse
from .models import Vendedor, Usuario

# Create your views here.
def vendedor(request):
  vendedors = Usuario.objects.filter(idrol=1)
  context = {'vendedores':vendedors}
  return render(request, 'usuarios/vendedor.html', context) 

