from rest_framework import viewsets, response, status
from rest_framework.serializers import CurrentUserDefault, HiddenField
from . import serializers, models


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PostSerializer
    queryset = models.Post.objects.all()

    def create(self, request, *args, **kwargs):
        post = models.Post.objects.create(
            author=request.user,
            text=request.data['text']
        )
        try:
            post.media = request.data['media']
            post.save()
        except:
            pass
        return response.Response(status=status.HTTP_201_CREATED)
    
    
