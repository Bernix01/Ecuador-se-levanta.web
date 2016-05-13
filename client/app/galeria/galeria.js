'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('galeria', {
        url: '/galeria',
        template: '<galeria></galeria>'
      });
  });
