
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token 

from .views import LoginView, RegisterView, LogoutView

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view()),
    path('logout/', LogoutView.as_view())
]
