# Generated by Django 4.2.12 on 2024-05-22 15:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bowtie',
            old_name='track_inventory',
            new_name='number_sold',
        ),
        migrations.RenameField(
            model_name='tie',
            old_name='track_inventory',
            new_name='number_sold',
        ),
    ]
