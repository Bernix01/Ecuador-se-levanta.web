'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.recibir.ubicacion', {
        url: '/ubicacion/:id',
        template: '<lugar></lugar>'
      });
  });
