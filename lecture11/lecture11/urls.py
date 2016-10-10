from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'',include('formexample.urls')),
    url(r'',include('music.urls')),
    url(r'^admin/', admin.site.urls),
]
