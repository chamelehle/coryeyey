# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-05-16 20:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_aboutl_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutl',
            name='phone',
            field=models.IntegerField(),
        ),
    ]