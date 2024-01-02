from rest_framework import status
from django.shortcuts import render
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post
from .serializers import PostSerializer


# Create your views here.
class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)


    def get(self, request, *args, **kwargs):
        type = kwargs.get("type")

        if type == 0:
            posts = Post.objects.all()
        elif type == 1:
            posts = Post.objects.filter(category=type)
        elif type == 2:
            posts = Post.objects.filter(category=type)


        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data)


class CardView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        id = kwargs.get('post_id')
        posts = Post.objects.filter(id=id)
        serializer = PostSerializer(posts, many=True)

        print(f"Id: {id}")

        return Response(serializer.data, status=status.HTTP_200_OK)