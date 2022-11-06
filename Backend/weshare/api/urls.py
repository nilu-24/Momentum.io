from django.urls import path
from . import views

urlpatterns = [
    path('',views.apiOverview,name="api-overview"),
    path('user-list/',views.getUserList,name="get-users"),
    path('user-create/',views.userCreate,name="create-user"),
    path('user-update/<str:pk>',views.updateUser,name="update-user"),
    path('user-detail/<str:pk>',views.getUserDetails,name="detail-user"),
    path('user-delete/<str:pk>',views.deleteUser,name="delete-user"),

    path('post-list/',views.getPosts,name="get-posts"),
    path('post-create/',views.createPost,name="create-post"),
    path('post-update/<str:pk>',views.updatePost,name="update-post"),
    path('post-detail/<str:pk>',views.getPost,name="detail-post"),
    path('post-delete/<str:pk>',views.deletePost,name="delete-user"),

    path('posttag-list/',views.getPostTags,name="get-posttags"),
    path('posttag-create/',views.createPostTag,name="create-post"),
    path('posttag-update/<str:pk>',views.updatePostTag,name="update-posttag"),
    path('posttag-detail/<str:pk>',views.getPostTag,name="detail-posttag"),
    path('posttag-delete/<str:pk>',views.deletePostTag,name="delete-posttag"),
    
]