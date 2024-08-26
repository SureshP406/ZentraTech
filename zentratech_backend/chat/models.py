from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()

class Interest(models.Model):
    sender = models.ForeignKey(User, related_name="sent_interests", on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name="received_interests", on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('accepted', 'Accepted'), ('rejected', 'Rejected')])

class Message(models.Model):
    chat = models.ForeignKey(Interest, on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
