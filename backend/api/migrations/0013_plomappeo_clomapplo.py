# Generated by Django 4.2.8 on 2024-01-16 14:29

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_knowledge'),
    ]

    operations = [
        migrations.CreateModel(
            name='PloMapPeo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('correlation_level', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('peo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.peo')),
                ('plo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.plo')),
            ],
        ),
        migrations.CreateModel(
            name='CloMapPlo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('correlation_level', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('clo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.clo')),
                ('plo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.plo')),
            ],
        ),
    ]
