# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-05 19:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20170305_1150'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='submissions',
            new_name='submit',
        ),
    ]