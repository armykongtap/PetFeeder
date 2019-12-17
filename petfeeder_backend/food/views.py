from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from food.models import Food
from food.serializers import FoodSerializer


@csrf_exempt
def food_list(request):

    if request.method == 'GET':
        foodlog = Food.objects.all()
        serializer = FoodSerializer(foodlog, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = FoodSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201, json_dumps_params={'ensure_ascii': False})
        return JsonResponse(serializer.errors, status=400)
