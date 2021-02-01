from django.db import models

from django.conf import settings
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.TextField(max_length=5000, null=True, blank=True)
    media = models.FileField(upload_to='posts/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    post = models.ForeignKey(Post, related_name='comment', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class Reply(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    comment = models.ForeignKey(Comment, related_name='reply', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Reaction(models.Model):
    post = models.ForeignKey(Post, related_name='reaction', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user', on_delete=models.CASCADE)
    reaction_type = models.CharField(choices=( 
        ('love', 'love'), 
        ('haha', 'haha'), 
        ('sad', 'sad'), 
        ('angry', 'angry')
    ), null=True, max_length=10)


    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['post', 'user'], name='unique_reaction')
        ]