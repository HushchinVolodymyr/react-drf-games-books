from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)
    content = models.TextField()
    image = models.ImageField(upload_to='post_image')

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True, null=True)

    def __str__(self):
        return self.name