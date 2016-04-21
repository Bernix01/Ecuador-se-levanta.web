'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.lugar', {
        url: 'lugar/:id',
        template: '<lugar></lugar>'
      });
  });
