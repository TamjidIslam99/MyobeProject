# Generated by Django 5.0.1 on 2024-01-19 17:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_curriculum'),
    ]

    operations = [
        migrations.CreateModel(
            name='Syllabus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program', models.CharField(max_length=50)),
                ('selectedOption', models.CharField(max_length=50)),
                ('yearValue', models.CharField(max_length=50)),
                ('semesterValue', models.CharField(max_length=50)),
                ('session', models.CharField(max_length=50)),
                ('upCurriculum', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.curriculum')),
            ],
        ),
    ]
