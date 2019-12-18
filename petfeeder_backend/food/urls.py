from django.urls import path
from food import views


urlpatterns = [
    path('weight/', views.weight_list),
    path('feed/', views.feed_list),
    path('howfeed/', views.feed_how),
]

