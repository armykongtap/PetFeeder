from rest_framework import serializers
from food.models import Weight,Schedule


class WeightSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Weight
        fields = ['id', 'time', 'weight']

class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'time', 'amount']