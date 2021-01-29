from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register('post', views.PostViewSet)


urlpatterns = router.urls