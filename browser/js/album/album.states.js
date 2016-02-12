'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    template: '<album-list albums="albums"></album-list>'
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    template: '<album album="album"></album>'
  });

});
