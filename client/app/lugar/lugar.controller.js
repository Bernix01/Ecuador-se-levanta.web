'use strict';
(function(){

class LugarComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('lugar', {
    templateUrl: 'app/lugar/lugar.html',
    controller: LugarComponent
  });

})();
