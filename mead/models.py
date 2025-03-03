from django.db import models


class MeadItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    retail_price = models.DecimalField(max_digits=10, decimal_places=2)
    picture_url = models.URLField(blank=True)
    sku = models.CharField(max_length=256)
