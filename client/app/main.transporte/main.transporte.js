'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.transporte', {
        url: 'proyectos',
        template: '<donar></donar>'
      });
  });
