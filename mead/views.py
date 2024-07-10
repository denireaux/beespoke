from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import MeadItem
from .encoders import MeadItemEncoder
import json


@csrf_exempt
@require_http_methods(["GET", "POST"])
def list_meaditems(request):
    if request.method == "GET":
        meaditems = MeadItem.objects.all()
        return JsonResponse(meaditems, encoder=MeadItemEncoder, safe=False)
    else:
        content = json.loads(request.body)
        meaditems = MeadItem.objects.create(**content)
        return JsonResponse(meaditems, encoder=MeadItemEncoder, safe=False)
    

@csrf_exempt
@require_http_methods(["GET", "PUT", "DELETE"])
def meaditem_detail(request, id):
    if request.method == "GET":
        meaditem = MeadItem.objects.get(id=id)
        return JsonResponse(meaditem, encoder=MeadItemEncoder, safe=False)
