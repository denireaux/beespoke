# Generated by Django 4.2.12 on 2024-07-10 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mead', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meaditem',
            name='retail_price',
            field=models.IntegerField(),
        ),
    ]
