from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$',views.index, name='index'),
    url(r'^suggestions/$',views.suggestions, name="suggestions"),
    url(r'^suggestions$',views.suggestions, name="suggestions"),
]