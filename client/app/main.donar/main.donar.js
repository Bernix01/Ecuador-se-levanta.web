'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.donar', {
        url: 'donar',
        template: '<donar></donar>'
      });
  });
