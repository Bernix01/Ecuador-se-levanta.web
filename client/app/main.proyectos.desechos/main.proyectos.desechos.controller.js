'use strict';
(function(){

class MainProyectosDesechosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('desechos', {
    templateUrl: 'app/main.proyectos.desechos/main.proyectos.desechos.html',
    controller: MainProyectosDesechosComponent
  });

})();
