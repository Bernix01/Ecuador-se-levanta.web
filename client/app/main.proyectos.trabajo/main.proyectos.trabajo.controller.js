'use strict';
(function(){

class MainProyectosTrabajoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('trabajo', {
    templateUrl: 'app/main.proyectos.trabajo/main.proyectos.trabajo.html',
    controller: MainProyectosTrabajoComponent
  });

})();
