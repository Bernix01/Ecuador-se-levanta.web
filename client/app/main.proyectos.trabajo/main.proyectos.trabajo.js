'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectos.trabajo', {
        url: '/trabajo',
        template: '<trabajo></trabajo>'
      });
  });
