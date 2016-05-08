'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.donar', {
        url: 'nuestro-desafio',
        template: '<proyectos></proyectos>'
      });
  });
