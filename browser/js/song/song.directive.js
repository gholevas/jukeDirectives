//TO DO: need to finish this directive as well as its template

juke.directive('song', function (AlbumFactory) {
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