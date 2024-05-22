# Generated by Django 4.2.12 on 2024-05-22 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suppliers', '0004_alter_supplier_contact_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supplier',
            name='contact_email',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='supplier',
            name='contact_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='supplier',
            name='wholesale_discount',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]