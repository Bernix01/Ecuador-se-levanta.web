'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.social', {
        url: '/reconstruccion-social',
        template: '<social></social>'
      });
  });
