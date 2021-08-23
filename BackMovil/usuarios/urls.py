from django.urls import path
from . import views

urlpatterns = [
  path('<str:nombre>/', views.usuario, name = 'usuario')
]