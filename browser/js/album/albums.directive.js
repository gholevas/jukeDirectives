juke.directive('albumList', function (AlbumFactory) {
    return {
        restrict: 'E', 
        templateUrl: '/js/album/templates/albums.template.html',
        scope: {
        	albums: '='
        },
        link: function(scope){
            AlbumFactory.fetchAll()
            .then(function(allAlbums){
            	scope.albums = allAlbums;

            })
        }	
    };
});

juke.directive('album', function (PlayerFactory,AlbumFactory,$stateParams) {
    return {
        restrict: 'E', 
        templateUrl: '/js/album/templates/album.template.html',
        scope: {
            album: '='
        },
        link: function(scope){
              AlbumFactory.fetchById($stateParams.albumId)
              .then(function(theAlbum){
                  scope.album = theAlbum;
              })
              scope.toggle = function (song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                  PlayerFactory.start(song, scope.album.songs);
                } else if ( PlayerFactory.isPlaying() ) {
                  PlayerFactory.pause();
                } else {
                  PlayerFactory.resume();
                }
              };

              scope.getCurrentSong = function () {
                return PlayerFactory.getCurrentSong();
              };

              scope.isPlaying = function (song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
              };
        }   
    };
});