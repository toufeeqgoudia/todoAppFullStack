from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializerz import TodoSerializer
from .models import Todo

# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
