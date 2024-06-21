from django.contrib import admin
from django.urls import path, include
from .views import list_accessories, accessory_detail, list_ties

urlpatterns = [
    path('', list_accessories, name='list_accessories'),
    path('<int:id>/', accessory_detail, name='accessory_detail'),
    path('ties/', list_ties, name='list_ties')
]
