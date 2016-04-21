'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.places = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('places');
      });
    }

    $onInit() {
      this.$http.get('/api/places').then(response => {
        this.places = response.data;
        this.socket.syncUpdates('places', this.places);
      });
    }
  }
  angular.module('ecuadorAyudaWebApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });

})();
