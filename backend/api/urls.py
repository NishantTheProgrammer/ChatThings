from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token 

from .views import HelloView

urlpatterns = [
    path('hello/', HelloView.as_view()),
    path('login/', obtain_auth_token, name='api_token_auth'),
]
