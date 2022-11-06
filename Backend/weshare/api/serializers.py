from dataclasses import field, fields
from rest_framework import serializers
from .models import User,Post,PostTag

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"

class PostSerializer(serializers.ModelSerializer):
    # user = serializers.RelatedField(source='User.id',readOn)
    class Meta:
        model=Post
        fields="__all__"

class PostTagSerializer(serializers.ModelSerializer):
    class Meta:
        model=PostTag
        fields="__all__"
