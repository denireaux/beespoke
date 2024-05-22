from common.json import ModelEncoder
from .models import Supplier


class SupplierEncoder(ModelEncoder):
    model = Supplier
    properties = [
        "id",
        "name",
        "contact_number",
        "contact_email",
        "wholesale_discount",
    ]
