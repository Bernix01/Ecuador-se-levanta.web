'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proveedores', {
        url: 'ofrecen/proveedores',
        template: '<proveedores></proveedores>'
      });
  });
