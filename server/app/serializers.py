from rest_framework import serializers

from app.models import Todo

class TodoSerializer(serializers.ModelSerializer):
   class Meta:
       model = Todo
       fields = ('description', 'state', 'createdAt', 'completedAt')