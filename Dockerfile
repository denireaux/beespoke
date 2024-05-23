FROM python:3.9-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /usr/src/app/
COPY fixtures/ /usr/src/app/fixtures/

CMD ["sh", "-c", "python manage.py migrate && python manage.py loaddata /usr/src/app/fixtures/initial_supplier_data.json && python manage.py runserver 0.0.0.0:8000"]
