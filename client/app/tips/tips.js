'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tips', {
        url: '/recomendaciones',
        template: '<recomendaciones></recomendaciones>'
      });
  });
