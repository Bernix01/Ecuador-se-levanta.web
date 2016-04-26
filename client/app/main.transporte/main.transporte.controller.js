'use strict';
(function(){

class MainTransporteComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('transporte', {
    templateUrl: 'app/main.transporte/main.transporte.html',
    controller: MainTransporteComponent
  });

})();
