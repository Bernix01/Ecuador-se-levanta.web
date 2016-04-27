'use strict';
(function(){

class MainProyectosSocialComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('social', {
    templateUrl: 'app/main.proyectos.social/main.proyectos.social.html',
    controller: MainProyectosSocialComponent
  });

})();
