'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.donar.donaciones', {
        url: '/donaciones-economicas',
        template: '<donaciones></donaciones>'
      });
  });
