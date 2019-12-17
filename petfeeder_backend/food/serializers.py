from rest_framework import serializers
from food.models import Food


class FoodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'time', 'change']
