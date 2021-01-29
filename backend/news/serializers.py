from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


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


