from django.contrib import admin
from .models import Accessory, Tie, BowTie, PocketSquare


@admin.register(Accessory)
class AccessoryAdmin(admin.ModelAdmin):
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


@admin.register(PocketSquare)
class PocketSquareAdmin(admin.ModelAdmin):
        list_display = [
        "name"
    ]