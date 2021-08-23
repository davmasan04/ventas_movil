# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Categoria(models.Model):
    idcategoria = models.AutoField(db_column='idCategoria', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'categoria'


class Cliente(models.Model):
    idcliente = models.AutoField(db_column='idCliente', primary_key=True)  # Field name made lowercase.
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    cedula = models.CharField(max_length=10)
    tienda = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=50)
    estado = models.IntegerField()
    fecharegistro = models.DateTimeField(db_column='fechaRegistro')  # Field name made lowercase.
    ciudad = models.CharField(max_length=50)
    idpedido = models.ForeignKey('Pedido', models.DO_NOTHING, db_column='idPedido')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'cliente'


class Detallepedido(models.Model):
    iddetalle = models.AutoField(db_column='idDetalle', primary_key=True)  # Field name made lowercase.
    cantidad = models.IntegerField()
    precio = models.FloatField(blank=True, null=True)
    iva = models.FloatField(blank=True, null=True)
    descuento = models.FloatField(blank=True, null=True)
    idpedido = models.ForeignKey('Pedido', models.DO_NOTHING, db_column='idPedido')  # Field name made lowercase.
    idproducto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idProducto')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'detallepedido'


class Empaque(models.Model):
    idempaque = models.AutoField(db_column='idEmpaque', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'empaque'


class Pedido(models.Model):
    idpedido = models.AutoField(db_column='idPedido', primary_key=True)  # Field name made lowercase.
    estado = models.CharField(max_length=10)
    fechapedido = models.DateTimeField(db_column='fechaPedido')  # Field name made lowercase.
    ahorro = models.FloatField()
    subtotal = models.FloatField()
    ivatotal = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    comentario = models.CharField(max_length=100, blank=True, null=True)
    idvendedor = models.ForeignKey('Vendedor', models.DO_NOTHING, db_column='idVendedor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pedido'


class Producto(models.Model):
    idproducto = models.AutoField(db_column='idProducto', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=50)
    marca = models.CharField(max_length=30)
    precio = models.FloatField(blank=True, null=True)
    fechaingreso = models.DateTimeField(db_column='fechaIngreso', blank=True, null=True)  # Field name made lowercase.
    iva = models.FloatField(blank=True, null=True)
    idunidad = models.ForeignKey('UnidadMedida', models.DO_NOTHING, db_column='idUnidad')  # Field name made lowercase.
    idempaque = models.ForeignKey(Empaque, models.DO_NOTHING, db_column='idEmpaque')  # Field name made lowercase.
    idcategoria = models.ForeignKey(Categoria, models.DO_NOTHING, db_column='idCategoria')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'producto'


class Rol(models.Model):
    idrol = models.AutoField(db_column='idRol', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'rol'


class UnidadMedida(models.Model):
    idunidad = models.AutoField(db_column='idUnidad', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=50)
    valor = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'unidad_medida'


class Usuario(models.Model):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)  # Field name made lowercase.
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    ruc = models.CharField(max_length=13)
    cedula = models.CharField(max_length=10)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=50)
    estado = models.IntegerField()
    fecharegistro = models.DateTimeField(db_column='fechaRegistro')  # Field name made lowercase.
    usuario = models.CharField(max_length=50)
    contrasena = models.CharField(max_length=50)
    idrol = models.ForeignKey(Rol, models.DO_NOTHING, db_column='idRol')  # Field name made lowercase.
    idvendedor = models.ForeignKey('Vendedor', models.DO_NOTHING, db_column='idVendedor')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'usuario'


class Vendedor(models.Model):
    idvendedor = models.AutoField(db_column='idVendedor', primary_key=True)  # Field name made lowercase.
    numventas = models.IntegerField(db_column='numVentas')  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'vendedor'
