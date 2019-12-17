from django.urls import path
from food import views

urlpatterns = [
    path('food/', views.food_list),
]
