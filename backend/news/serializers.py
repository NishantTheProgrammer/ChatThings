from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


from .models import Post, Comment, Reply, Reaction


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'picture']


class ReplySerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    class Meta:
        model = Reply
        fields = ['id', 'text', 'author', 'created_at']
        extra_kwargs = {'created_at': {'read_only': True}}


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    reply = ReplySerializer(many=True, read_only=True)
    class Meta:
        model = Comment
        fields = ['id', 'text', 'reply', 'author', 'created_at']
        extra_kwargs = {'created_at': {'read_only': True}}

class ReactionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Reaction
        fields = ['reaction_type', 'user']


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    comment = CommentSerializer(many=True, read_only=True)
    reaction = ReactionSerializer(many=True, read_only=True)


    class Meta:
        model = Post
        fields = ('id', 'text', 'media', 'author', 'created_at', 'comment', 'reaction')
        extra_kwargs = {'created_at': {'read_only': True}}


