from django.db import models

class Supplier(models.Model):
    name = models.CharField(max_length=256)
    contact_number = models.IntegerField(null=True, blank=True)
    contact_email = models.CharField(max_length=256, null=True, blank=True)
    wholesale_discount = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name


class TaxZone(models.Model):
    name = models.CharField(max_length=256)
    tax_rate = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name