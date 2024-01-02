from django.test import TestCase
from ..models import Post, Category

class PostCategoryModelTest(TestCase):

    def setUp(self):
        self.category = Category.objects.create(name='Test Category')
        self.post = Post.objects.create(
            title='Test Post',
            category=self.category,
            content='This is a test post.',
            image='path/to/test_image.jpg'
        )

    def test_category_str_representation(self):
        self.assertEqual(str(self.category), 'Test Category')

    def test_post_str_representation(self):
        self.assertEqual(str(self.post), 'Test Post')

    def test_post_has_category(self):
        self.assertEqual(self.post.category, self.category)

    def test_post_has_correct_title(self):
        self.assertEqual(self.post.title, 'Test Post')

    def test_post_has_correct_content(self):
        self.assertEqual(self.post.content, 'This is a test post.')

    def test_post_has_correct_image_path(self):
        self.assertEqual(self.post.image, 'path/to/test_image.jpg')

