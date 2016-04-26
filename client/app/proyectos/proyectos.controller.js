'use strict';
(function(){

class ProyectosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('proyectos', {
    templateUrl: 'app/proyectos/proyectos.html',
    controller: ProyectosComponent
  });

})();
