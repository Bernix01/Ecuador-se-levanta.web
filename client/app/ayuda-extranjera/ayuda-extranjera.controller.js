'use strict';
(function(){

class AyudaExtranjeraComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('ayudaExtranjera', {
    templateUrl: 'app/ayuda-extranjera/ayuda-extranjera.html',
    controller: AyudaExtranjeraComponent
  });

})();
