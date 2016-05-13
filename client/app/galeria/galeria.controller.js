'use strict';
(function(){

class GaleriaComponent {
  constructor($http) {
    $htpp.get('api/images').then(response => {
      this.images = response.data;
    })
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('galeria', {
    templateUrl: 'app/galeria/galeria.html',
    controller: GaleriaComponent,
    controlleras: 'vm'
  });

})();
