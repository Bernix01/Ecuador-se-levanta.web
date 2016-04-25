'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.donar.servicios', {
        url: '/servicios',
        template: '<servicios></servicios>'
      });
  });
