from django.contrib import admin
from django.urls import path, re_path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/', include('account.urls')),
    path('api/', include('api.urls')),
    re_path(r'.*', include('frontend.urls')),
]
