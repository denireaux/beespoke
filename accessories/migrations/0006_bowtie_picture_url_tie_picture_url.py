# Generated by Django 4.2.12 on 2024-05-23 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0005_remove_accessory_accessory_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='bowtie',
            name='picture_url',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='tie',
            name='picture_url',
            field=models.URLField(blank=True),
        ),
    ]