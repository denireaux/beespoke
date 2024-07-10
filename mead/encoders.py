from common.json import ModelEncoder
from .models import MeadItem


class MeadItemEncoder(ModelEncoder):
    model = MeadItem
    properties = [
        "id",
        "name",
        "description",
        "retail_price",
        "picture_url",
        "sku"
    ]
