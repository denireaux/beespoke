# Generated by Django 4.2.12 on 2024-06-22 02:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accessories', '0009_alter_bowtie_outlet_tax_main_outlet_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tie',
            name='outlet_tax_main_outlet',
        ),
        migrations.RemoveField(
            model_name='tie',
            name='tags',
        ),
    ]