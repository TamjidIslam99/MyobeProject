# Generated by Django 4.2.8 on 2024-03-24 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_outline'),
    ]

    operations = [
        migrations.AddField(
            model_name='outline',
            name='clos',
            field=models.ManyToManyField(default=[], to='api.clo'),
        ),
    ]
