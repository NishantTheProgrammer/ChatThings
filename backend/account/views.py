from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import get_user_model
User = get_user_model()


from .serializers import UserSerializer, CustomTokenObtainPairSerializer, User


class ObtainTokenPairWithView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = CustomTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer




class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class AuthUserView(APIView):

    def get(self, request):
        queryset = User.objects.all()
        user = request.user

        print(user.picture)    
        serializer = UserSerializer(user)
        return Response(serializer.data)