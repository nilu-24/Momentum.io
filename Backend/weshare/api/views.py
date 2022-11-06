from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from .serializers import UserSerializer,PostSerializer,PostTagSerializer
from .models import User,Post,PostTag

@api_view(['POST','GET'])
def apiOverview(request):
    return Response({
        "Get User":"api/user-list/",
        "Add User":"api/user-create",
        "Update User":"api/user-update/id",
        "Get User Detail":"api/user-detail/id",
        "Delete User":"api/user-delete/id",

        "Get Post":"api/post-list/",
        "Add Post":"api/post-create",
        "Update Post":"api/post-update/id",
        "Get Post Detail":"api/post-detail/id",
        "Delete Post":"api/post-delete/id",

        "Get PostTag":"api/posttag-list/",
        "Add PostTag":"api/posttag-create",
        "Update Posttag":"api/posttag-update/id",
        "Get posttag Detail":"api/posttag-detail/id",
        "Delete Posttag":"api/posttag-delete/id",

    })

@api_view(['GET','POST'])
def getUserList(request):
    users = User.objects.all()
    serializers = UserSerializer(users,many=True)
    return Response(serializers.data)

@api_view(['POST'])
def userCreate(request):
    serializers = UserSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)


@api_view(['GET'])
def getUserDetails(request,pk):
    existingUser = User.objects.get(id=pk)
    serializers = UserSerializer(existingUser,many=False)
    return Response(serializers.data)

@api_view(['PUT'])
def updateUser(request,pk):
    existingUser = User.objects.get(id=pk)
    serializer = UserSerializer(instance=existingUser,data=request.data)
    if serializer.is_valid():
        print("It is valid")
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def deleteUser(request,pk):
    try:
        existingUser = User.objects.get(id=pk)
        existingUser.delete()
    except:
        return Response("Cannot get Deleted!",status=400)

    return Response("Requested Data is got deleted")


# API view for Post Model

@api_view(['POST'])
def createPost(request):
    user_uuid = str(request.data['user'])

    request.data['user'] = user_uuid
    serializers = PostSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
    print(serializers.errors)
    
    return Response(serializers.data)

@api_view(['GET'])
def getPosts(request):
    posts = Post.objects.all()
    s = PostSerializer(posts,many=True)
    return Response(s.data)

@api_view(['GET'])
def getPost(request,pk):
    posts = Post.objects.get(id=pk)
    serializers = PostSerializer(posts,many=False)
    return Response(serializers.data)

@api_view(['PUT'])
def updatePost(request,pk):
    updatePost = Post.objects.get(id=pk)
    serializers = PostSerializer(instance=updatePost,data=request.data)
    if serializers.is_valid():
        serializers.save()
    
    print(serializers.errors)
    return Response(serializers.data)

@api_view(['DELETE'])
def deletePost(request,pk):
    try:
        existingPost = Post.objects.get(id=pk)
        existingPost.delete()
    except:
        return Response("Cannot get Deleted!",status=400)

    return Response("Requested Data is got deleted")


# API view for PostTag Model

@api_view(['POST'])
def createPostTag(request):
    serializers = PostTagSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
    
    return Response(serializers.data)

@api_view(['GET'])
def getPostTags(request):
    posttags = PostTag.objects.all()
    serializers = PostTagSerializer(posttags,many=True)
    return Response(serializers.data)

@api_view(['GET'])
def getPostTag(request,pk):
    posttags = PostTag.objects.get(id=pk)
    serializers = PostTagSerializer(posttags,many=False)
    return Response(serializers.data)

@api_view(['PUT'])
def updatePostTag(request,pk):
    updatePostTags = PostTag.objects.get(id=pk)
    serializers = PostTagSerializer(instance=updatePostTags,data=request.data)
    if serializers.is_valid():
        serializers.save()
    return Response(serializers.data)

@api_view(['DELETE'])
def deletePostTag(request,pk):
    try:
        existingPostTags = PostTag.objects.get(id=pk)
        existingPostTags.delete()
    except:
        return Response("Cannot get Deleted!",status=400)

    return Response("Requested Data is got deleted")







