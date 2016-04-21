'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.tips', {
        url: 'tips',
        template: '<tips></tips>'
      });
  });
