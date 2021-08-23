from django.contrib import admin
from usuarios.models import Vendedor, Cliente
# Register your models here.


# class VendedorAdmin(admin.ModelAdmin):
#     list_display = ['numventas']

admin.site.register(Vendedor)
admin.site.register(Cliente)