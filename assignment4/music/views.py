#from rest.fromework.views import APIViews
from django.http import Http404
from django.shortcuts import render, get_object_or_404
from .models import Album, Song
#from .serializers import StockSerializer


def index(request):
    all_albums = Album.objects.all()
    return render(request, 'music/index.html', {'all_albums' : all_albums})
def detail(request, album_id):
    album = get_object_or_404(Album, pk=album_id)
    return render(request, 'music/detail.html', {'album': album})


def favorite(request, album_id):
    album = get_object_or_404(Album, pk=album_id)
    # try:
    selected_song = album.song_set.get(pk=request.POST['song'])
    if selected_song == True:
        selected_song.is_favorite = False
    else:
        selected_song.is_favorite = True
    selected_song.save()
    return render(request, 'music/detail.html', {'album' : album})
    '''except(KeyError, Song.DoesNotExist):
        return render(request, 'music/detail.html', {
        'album': album,
        'error_message': "no valid song",
        })
    else:
        if selected_song == False:
            selected_song.is_favorite = True
        else:
            selected_song.is_favorite = False
        selected_song.save()
        return render(request, 'music/detail.html', {'album' : album})
'''
