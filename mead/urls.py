from django.contrib import admin
from django.urls import path
from .views import list_meaditems, meaditem_detail


urlpatterns = [
    path('', list_meaditems, name='list_meaditems'),
    path('<int:id>/', meaditem_detail, name='meaditem_detail'),
]