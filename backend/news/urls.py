from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register('post', views.PostViewSet)
router.register('comment', views.CommentViewSet)
router.register('reply', views.ReplyViewSet)
router.register('reaction', views.ReactionViewSet)


urlpatterns = router.urls