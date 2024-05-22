from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Accessory
from .encoders import AccessoryEncoder
import json


@csrf_exempt
@require_http_methods(["GET", "POST"])
def list_accessories(request):
    if request.method == "GET":
        accessories = Accessory.objects.all()
        return JsonResponse(accessories, encoder=AccessoryEncoder, safe=False)
    else:
        content = json.loads(request.body)
        accessories = Accessory.objects.create(**content)
        return JsonResponse(accessories, encoder=AccessoryEncoder, safe=False)


@csrf_exempt
@require_http_methods(["GET", "DELETE"])
def accessory_detail(request, id):
    if request.method == "GET":
        accessory = Accessory.objects.get(id=id)
        return JsonResponse(accessory, encoder=AccessoryEncoder, safe=False)
    else:
        try:
            accessory = Accessory.objects.get(id=id)
            count, _ = accessory.delete()
        except Accessory.DoesNotExist:
            return JsonResponse({"error": "Accessory does not exist"}, status=404)
        return JsonResponse({"deleted": count > 0})

