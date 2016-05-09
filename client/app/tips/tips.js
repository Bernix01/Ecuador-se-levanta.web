'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.voluntariado', {
        url: 'voluntariado',
        template: '<recomendaciones></recomendaciones>'
      });
  });
