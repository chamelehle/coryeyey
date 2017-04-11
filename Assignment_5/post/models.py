from django.db import models

# Create your models here.
class submit(models.Model):
    comment=models.CharField(max_length=500)
