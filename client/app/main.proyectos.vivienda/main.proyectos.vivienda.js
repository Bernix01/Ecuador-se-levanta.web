'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.vivienda', {
        url: '/proyectos',
        template: '<vivienda></vivienda>'
      });
  });
