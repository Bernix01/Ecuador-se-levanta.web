'use strict';
(function() {

  class GaleriaComponent {
    constructor($http, socket, $scope) {
      this.$http = $http;
      this.$http.get('api/images').then(response => {
        this.images = response.data;
        console.log(response.data);
      })
    }
  }

  angular.module('ecuadorAyudaWebApp')
    .component('galeria', {
      templateUrl: 'app/galeria/galeria.html',
      controller: GaleriaComponent,
      controllerAs: 'vm'
    });

})();
