# Generated by Django 4.1.3 on 2024-01-02 14:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_peo'),
    ]

    operations = [
        migrations.CreateModel(
            name='PLO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descriptionPLO', models.CharField(max_length=50)),
            ],
        ),
    ]
