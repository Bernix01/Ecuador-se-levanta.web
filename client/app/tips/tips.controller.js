'use strict';
(function(){

class TipsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('tips', {
    templateUrl: 'app/tips/tips.html',
    controller: TipsComponent
  });

})();
