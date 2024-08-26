from django.urls import path
from .views import InterestListCreateView, MessageListCreateView

urlpatterns = [
    path('api/interests/', InterestListCreateView.as_view(), name='interest-list-create'),
    path('api/messages/', MessageListCreateView.as_view(), name='message-list-create'),
]
