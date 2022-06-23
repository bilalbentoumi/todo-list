from django.db import models

class Todo(models.Model):
   description = models.CharField(max_length=100)
   state = models.CharField(max_length=100)
   createdAt = models.DateTimeField()
   completedAt = models.DateTimeField()