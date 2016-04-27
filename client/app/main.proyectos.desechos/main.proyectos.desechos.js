'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.desechos', {
        url: '/manejo-de-desechos',
        template: '<desechos></desechos>'
      });
  });
