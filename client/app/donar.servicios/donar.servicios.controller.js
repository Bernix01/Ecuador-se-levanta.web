'use strict';
(function(){

class DonarServiciosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('servicios', {
    templateUrl: 'app/donar.servicios/donar.servicios.html',
    controller: DonarServiciosComponent
  });

})();
