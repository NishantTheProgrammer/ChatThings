from rest_framework import viewsets, response, status
from rest_framework.serializers import CurrentUserDefault, HiddenField
from . import serializers, models


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PostSerializer
    queryset = models.Post.objects.all()

    def create(self, request):
        if(request.data.get('text') == None and request.data.get('media') == None):
            return response.Response({'message': 'No content passed in post'},status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        post = models.Post.objects.create(
            author=request.user,
            text=request.data.get('text'),
            media=request.data.get('media')
        )
        post.save()
        return response.Response(status=status.HTTP_201_CREATED)

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CommentSerializer
    queryset = models.Comment.objects.all()

    def create(self, request):
        post = models.Post.objects.get(id=request.data.get('post'))
        comment = models.Comment.objects.create(
            author=request.user,
            post=post,
            text=request.data.get('text')
        )
        comment.save()
        return response.Response(status=status.HTTP_201_CREATED)


class ReplyViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReplySerializer
    queryset = models.Reply.objects.all()

    def create(self, request):
        comment = models.Comment.objects.get(id=request.data.get('comment'))
        reply = models.Reply.objects.create(
            author=request.user,
            comment=comment,
            text=request.data.get('text')
        )
        reply.save()
        return response.Response(status=status.HTTP_201_CREATED)

    
class ReactionViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReactionSerializer
    queryset = models.Reaction.objects.all()

    def create(self, request):
        new_reaction = request.data.get('reaction_type')
        if(new_reaction not in ['love', 'haha', 'sad', 'angry']):
            return response.Response(
                {"error": f"We currently don't support {new_reaction} rection type"}, 
                status=status.HTTP_406_NOT_ACCEPTABLE
            )

        post = models.Post.objects.get(id=request.data.get('post'))
        reaction, created = models.Reaction.objects.get_or_create(
            user=request.user,
            post=post
        )

        if(reaction.reaction_type == new_reaction):
            reaction.reaction_type = None
        else:
            reaction.reaction_type = new_reaction
        reaction.save()

        if(created):
            return response.Response(status=status.HTTP_201_CREATED)
        else:
            return response.Response(status=status.HTTP_200_OK)
        
