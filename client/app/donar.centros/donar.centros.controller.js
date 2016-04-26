'use strict';
(function() {

  class DonarCentrosComponent {
    constructor($http, socket, $scope) {

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
    .component('centros', {
      templateUrl: 'app/donar.centros/donar.centros.html',
      controller: DonarCentrosComponent,
      controllerAs: 'vm'
    });

})();
