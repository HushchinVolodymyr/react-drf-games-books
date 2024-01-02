from django.test import SimpleTestCase
from django.urls import reverse, resolve
from ..views import PostView, CardView

class TestUrls(SimpleTestCase):

    def test_posts_list_is_resolved(self):
        url = reverse('posts_list', args=[1])
        resolver = resolve(url)
        self.assertEqual(resolver.func.view_class, PostView)


    def test_card_is_resolved(self):
        url = reverse('card', args=[1])
        resolver = resolve(url)
        self.assertEqual(resolver.func.view_class, CardView)