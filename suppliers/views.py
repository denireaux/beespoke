from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from.models import Supplier
from .encoders import SupplierEncoder
import json

@csrf_exempt
@require_http_methods(["GET", "POST"])
def list_suppliers(request):
    if request.method == "GET":
        suppliers = Supplier.objects.all()
        return JsonResponse(suppliers, encoder=SupplierEncoder, safe=False)
    else:
        content = json.loads(request.body)
        suppliers = Supplier.objects.create(**content)
        return JsonResponse(suppliers, encoder=SupplierEncoder, safe=False)

@csrf_exempt
@require_http_methods(["GET", "DELETE"])
def supplier_detail(request, id):
    if request.method == "GET":
        supplier = Supplier.objects.get(id=id)
        return JsonResponse(supplier, encoder=SupplierEncoder, safe=False)
    else:
        try:
            supplier = Supplier.objects.get(id=id)
            count, _ = supplier.delete()
        except Supplier.DoesNotExist:
            return JsonResponse({"message": "Supplier does not exist"}, status=404)
        return JsonResponse({"deleted": count > 0})