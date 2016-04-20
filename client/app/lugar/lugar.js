'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lugar', {
        url: '/lugar',
        template: '<lugar></lugar>'
      });
  });
