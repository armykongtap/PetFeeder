from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from food.models import Weight
from food.serializers import WeightSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


@csrf_exempt
def weight_list(request):

    if request.method == 'GET':
        weightlog = Weight.objects.all()
        serializer = WeightSerializer(weightlog, many=True)
        return JsonResponse(serializer.data, status=200, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = WeightSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def feed_list(request):

    if request.method == 'GET':
        foodlog = Weight.objects.all()
        serializer = WeightSerializer(foodlog, many=True)
        return JsonResponse(serializer.data, status=200, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = WeightSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def feed_how(request):

    if request.method == 'GET':
        return HttpResponse(400)
