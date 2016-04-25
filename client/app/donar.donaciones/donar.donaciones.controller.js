'use strict';
(function(){

class DonarDonacionesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('donaciones', {
    templateUrl: 'app/donar.donaciones/donar.donaciones.html',
    controller: DonarDonacionesComponent
  });

})();
