'use strict';
(function(){

class MainDonarComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('donar', {
    templateUrl: 'app/main.donar/main.donar.html',
    controller: MainDonarComponent
  });

})();
