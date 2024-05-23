from django.db import models
from suppliers.models import Supplier, TaxZone

# Columns for accessories as per file sent in email
# id 
# handle
# sku
# name
# description
# product_category
# tags
# supply_price
# retail_price
# brand_name
# supplier_name
# active
# track_inventory
# outlet_tax_main_outlet
# inventory

# Added columns
# is_premium
# type (likely FK type of accesory)


class Accessory(models.Model):
    name = models.CharField(max_length=256)

    def __str__(self):
        return self.name


class Tie(models.Model):
    handle = models.CharField(max_length=256)
    sku = models.IntegerField()
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=256)
    product_category = models.ForeignKey(
        Accessory,
        related_name="ties",
        on_delete=models.CASCADE,
    )
    supply_price = models.IntegerField()
    retail_price = models.IntegerField()
    brand_name = models.CharField(max_length=256)
    supplier_name = models.ForeignKey(
        Supplier,
        related_name="ties",
        on_delete=models.CASCADE,
    )
    current_inventory = models.IntegerField(default=0)
    number_sold = models.IntegerField()
    outlet_tax_main_outlet = models.ForeignKey(
        TaxZone,
        related_name="ties",
        on_delete=models.CASCADE,
    )
    inventory = models.IntegerField()
    is_premium = models.BooleanField()
    picture_url = models.URLField(blank=True)
    tags = models.JSONField(default=list)

    def __str__(self):
        return self.name


class BowTie(models.Model):
    handle = models.CharField(max_length=256)
    sku = models.IntegerField()
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=256)
    product_category = models.ForeignKey(
        Accessory,
        related_name="bowties",
        on_delete=models.CASCADE,
    )
    supply_price = models.IntegerField()
    retail_price = models.IntegerField()
    brand_name = models.CharField(max_length=256)
    supplier_name = models.ForeignKey(
        Supplier,
        related_name="bowties",
        on_delete=models.CASCADE,
    )
    current_inventory = models.IntegerField(default=0)
    number_sold = models.IntegerField()
    outlet_tax_main_outlet = models.ForeignKey(
        TaxZone,
        related_name="bowties",
        on_delete=models.CASCADE,
    )
    inventory = models.IntegerField()
    is_premium = models.BooleanField()
    is_pretied = models.BooleanField()
    picture_url = models.URLField(blank=True)
    tags = models.JSONField(default=list)

    def __str__(self):
        return self.name


class PocketSquare(models.Model):
    handle = models.CharField(max_length=256)
    sku = models.IntegerField()
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=256)
    product_category = models.ForeignKey(
        Accessory,
        related_name="pocketsquares",
        on_delete=models.CASCADE,
    )
    supply_price = models.IntegerField()
    retail_price = models.IntegerField()
    brand_name = models.CharField(max_length=256)
    supplier_name = models.ForeignKey(
        Supplier,
        related_name="pocketsquares",
        on_delete=models.CASCADE,
    )
    current_inventory = models.IntegerField(default=0)
    number_sold = models.IntegerField()
    outlet_tax_main_outlet = models.ForeignKey(
        TaxZone,
        related_name="pocketsquares",
        on_delete=models.CASCADE,
    )
    inventory = models.IntegerField()
    is_premium = models.BooleanField()
    picture_url = models.URLField(blank=True)
    tags = models.JSONField(default=list)

    def __str__(self):
        return self.name
