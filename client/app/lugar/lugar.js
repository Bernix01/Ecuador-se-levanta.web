'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.lugar', {
        url: '/lugar',
        template: '<lugar></lugar>'
      });
  });