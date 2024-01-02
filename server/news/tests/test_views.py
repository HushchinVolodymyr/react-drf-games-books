from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
import json
from ..models import Post, Category  # Adjust the import path based on your project structure

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.list_url = reverse('posts_list', args=[1])
        self.card_url = reverse('card', args=[1])

        self.category = Category.objects.create(name='Test Category')

        self.post = Post.objects.create(
            title='Test Post',
            content='Test Content',
            category=self.category
        )

    def test_post_view_GET(self):
        response = self.client.get(self.list_url)

        self.assertEquals(response.status_code, status.HTTP_200_OK)

    def test_card_view_GET(self):
        response = self.client.get(self.card_url)

        self.assertEquals(response.status_code, status.HTTP_200_OK)
