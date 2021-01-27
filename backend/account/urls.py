
# from django.contrib import admin
# from django.urls import path, include
# from rest_framework.authtoken.views import obtain_auth_token 

# from .views import LoginView, RegisterView, LogoutView

# urlpatterns = [
#     path('login/', LoginView.as_view()),
#     path('register/', RegisterView.as_view()),
#     path('logout/', LogoutView.as_view())
# ]


from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import RegisterView

from .views import ObtainTokenPairWithView, LogoutAndBlacklistRefreshTokenForUserView

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view()),
    path('logout/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist')
]