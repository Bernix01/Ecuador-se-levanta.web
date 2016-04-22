'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tips', {
        url: 'tips',
        template: '<tips></tips>'
      });
  });
