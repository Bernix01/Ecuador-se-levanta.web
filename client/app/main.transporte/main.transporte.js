'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.transporte', {
        url: 'transporte',
        template: '<transporte></transporte>'
      });
  });
