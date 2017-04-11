from django.db import models

# Create your models here.
class submit(models.Model):
    comment=models.CharField(max_length=500)
    name=models.CharField(max_length=250)
    date=models.DateField()


    def __str__(self):
        return str(self.name) + " : " + str(self.date) + " : " + str(self.comment)
class fact(models.Model):
    description=models.CharField(max_length=500)
    title=models.CharField(max_length=250)
    url=models.URLField(max_length=1000, default='')


    def __str__(self):
        return str(self.title) + " : " + str(self.url) + " : " + str(self.description)

class aboutl(models.Model):
    position=models.CharField(max_length=500)
    person_name=models.CharField(max_length=250)
    email=models.URLField(max_length=1000, default='')
    phone=models.IntegerField(max_length=15)


    def __str__(self):
        return str(self.person_name) + " : " + str(self.email) + " : " + str(self.position) + " : " + str(self.phone)
