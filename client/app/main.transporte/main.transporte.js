'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.proyectostransporte', {
        url: 'donar',
        template: '<donar></donar>'
      });
  });
