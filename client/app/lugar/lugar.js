'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.donar.centros.ubicacion', {
        url: '/ubicacion/:id',
        template: '<lugar></lugar>'
      });
  });
