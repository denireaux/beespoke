from django.urls import path
from .views import list_suppliers, supplier_detail


urlpatterns = [
    path('suppliers/', list_suppliers, name='list_suppliers'),
    path('suppliers/<int:id>/', supplier_detail, name='supplier_detail'),
]
