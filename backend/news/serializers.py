from rest_framework import serializers
from django.contrib.auth.models import User


from .models import Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username',]

class PostSerializer(serializers.ModelSerializer):

    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'text', 'media', 'author', 'created_at')
        extra_kwargs = {'created_by': {'read_only': True}}


