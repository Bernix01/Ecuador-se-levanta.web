'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos', {
        url: 'proyectos',
        template: '<proyectos></proyectos>'
      });
  });
