'use strict';
(function(){

class ServiciosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('servicios', {
    templateUrl: 'app/ofrecen/servicios/servicios.html',
    controller: ServiciosComponent
  });

})();
