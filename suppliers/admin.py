from django.contrib import admin
from .models import Supplier, TaxZone

# Register your models here.
@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = [
        "name"
    ]


@admin.register(TaxZone)
class TaxZoneAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "tax_rate"
    ]