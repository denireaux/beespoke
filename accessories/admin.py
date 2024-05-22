from django.contrib import admin
from .models import Accessory, Supplier, Tie, BowTie


@admin.register(Accessory)
class AccessoryAdmin(admin.ModelAdmin):
        list_display = [
        "name"
    ]


@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = [
        "name"
    ]


@admin.register(Tie)
class TieAdmin(admin.ModelAdmin):
        list_display = [
        "name"
    ]


@admin.register(BowTie)
class BowTieAdmin(admin.ModelAdmin):
        list_display = [
        "name"
    ]