from common.json import ModelEncoder
from .models import Accessory, Tie, BowTie


class AccessoryEncoder(ModelEncoder):
    model = Accessory
    properties = [
        "id",
        "name",
    ]


class TieEncoder(ModelEncoder):
    model = Tie
    properties = [
        "id",
        "handle",
        "sku",
        "name",
        "description",
        "product_category",
        "color_id",
        "color_name",
        "supply_price",
        "retail_price",
        "brand_name",
        "supplier_name",
        "current_inventory",
        "number_sold",
        "inventory",
        "is_premium",
        "picture_url",
    ]


    def get_extra_data(self, o):
        return {
            "product_category": o.product_category.name,
            "supplier_name": o.supplier_name.name
        }
