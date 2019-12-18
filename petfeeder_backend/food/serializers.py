from rest_framework import serializers
from food.models import Weight


class WeightSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Weight
        fields = ['id', 'time', 'weight']
