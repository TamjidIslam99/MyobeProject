# Generated by Django 5.0.1 on 2024-01-19 19:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_remove_peo_upsyllabus'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='peo',
            name='upCurriculum',
        ),
    ]