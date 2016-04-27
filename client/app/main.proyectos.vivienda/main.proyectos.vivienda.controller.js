'use strict';
(function(){

class MainProyectosViviendaComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('vivienda', {
    templateUrl: 'app/main.proyectos.vivienda/main.proyectos.vivienda.html',
    controller: MainProyectosViviendaComponent
  });

})();
