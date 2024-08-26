from django.urls import path
from .views import InterestListCreateView, MessageListCreateView

urlpatterns = [
    path('interests/', InterestListCreateView.as_view(), name='interests'),
    path('messages/', MessageListCreateView.as_view(), name='messages'),
]
