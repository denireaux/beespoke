from django.db import models

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
    accessory_category = models.IntegerField()
    name = models.CharField(max_length=256)


class Supplier(models.Model):
    name = models.CharField(max_length=256)


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
    active = models.BooleanField()
    track_inventory = models.IntegerField()
    outlet_tax_main_outlet = models.IntegerField()
    inventory = models.IntegerField()
    is_premium = models.BooleanField()


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
    active = models.BooleanField()
    track_inventory = models.IntegerField()
    outlet_tax_main_outlet = models.IntegerField()
    inventory = models.IntegerField()
    is_premium = models.BooleanField()
    is_pretied = models.BooleanField()
