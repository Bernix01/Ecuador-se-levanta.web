'use strict';
(function(){

class MainRecibirUbicacionComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('main.recibir.ubicacion', {
    templateUrl: 'app/main.recibir.ubicacion/main.recibir.ubicacion.html',
    controller: MainRecibirUbicacionComponent
  });

})();
