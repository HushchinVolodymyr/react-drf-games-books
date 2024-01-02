from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from . import views

urlpatterns = [
    path('posts/<int:type>', views.PostView.as_view(), name='posts_list'),
    path('card/<int:post_id>', views.CardView.as_view(), name='card')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)