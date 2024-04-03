# Generated by Django 4.1.3 on 2024-01-20 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_remove_peo_upcurriculum_alter_peo_upsyllabus'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_code', models.CharField(max_length=255)),
                ('credit', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('prerequisites', models.CharField(blank=True, max_length=255, null=True)),
                ('type', models.CharField(max_length=255)),
                ('contact_hours', models.IntegerField()),
                ('total_lectures', models.IntegerField()),
                ('class_tests', models.IntegerField()),
                ('final_exam', models.IntegerField()),
                ('faculty', models.CharField(max_length=255)),
                ('rationale', models.TextField()),
            ],
        ),
    ]
