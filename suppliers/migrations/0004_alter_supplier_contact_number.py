# Generated by Django 4.2.12 on 2024-05-22 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suppliers', '0003_alter_supplier_contact_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supplier',
            name='contact_number',
            field=models.IntegerField(null=True),
        ),
    ]
