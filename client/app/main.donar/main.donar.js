'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.pr', {
        url: '',
        template: '<proyectos></proyectos>'
      });
  });
