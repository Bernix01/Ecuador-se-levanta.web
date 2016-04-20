'use strict';
(function(){

class OfrecenComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('ofrecen', {
    templateUrl: 'app/admin/ofrecen/ofrecen/ofrecen.html',
    controller: OfrecenComponent
  });

})();
