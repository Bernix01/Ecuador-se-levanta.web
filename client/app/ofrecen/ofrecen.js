'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.ofrecen', {
        url: '/ofrecen',
        abstract: true,
        template: '<ofrecen></ofrecen>'
      });
  });
