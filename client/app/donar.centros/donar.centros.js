'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.donar.centros', {
        url: '/centros',
        template: '<centros></centros>'
      });
  });
