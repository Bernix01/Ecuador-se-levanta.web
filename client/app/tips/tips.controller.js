'use strict';
(function(){

class TipsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('recomendaciones', {
    templateUrl: 'app/tips/tips.html',
    controller: TipsComponent
  });

})();
