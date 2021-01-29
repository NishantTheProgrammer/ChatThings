from django.db import models

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    picture = models.FileField(upload_to='users/', null=True, blank=True)