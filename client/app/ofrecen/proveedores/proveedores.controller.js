'use strict';
(function(){

class ProveedoresComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('ecuadorAyudaWebApp')
  .component('proveedores', {
    templateUrl: 'app/ofrecen/proveedores/proveedores.html',
    controller: ProveedoresComponent
  });

})();
