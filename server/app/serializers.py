from rest_framework import serializers

from app.models import Todo

class TodoSerializer(serializers.ModelSerializer):
   class Meta:
       model = Todo
       fields = ('id', 'description', 'state', 'createdAt', 'completedAt')