from django.shortcuts import render

from django.http import JsonResponse



def chat(request):
    return JsonResponse({
  "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }
  ] 
})