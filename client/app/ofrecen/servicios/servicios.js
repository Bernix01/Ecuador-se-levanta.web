'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.servicios', {
        url: 'ofrecen/servicios',
        template: '<servicios></servicios>'
      });
  });
