from email.policy import default
from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    drops = models.IntegerField()


class Post(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    tags = models.JSONField()
    country = models.CharField(max_length=50)
    flag = models.BooleanField(default=False)
    votes = models.IntegerField(default=0)
    unTag = models.JSONField(default=dict())

class PostTag(models.Model):
    tag = models.CharField(max_length=30)
    tagCount = models.IntegerField(default=0)


