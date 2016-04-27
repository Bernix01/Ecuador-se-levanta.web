'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.vivienda', {
        url: '/vivienda',
        template: '<vivienda></vivienda>'
      });
  });
