'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ayudaextranjera', {
        url: 'ayuda-extranjera',
        template: '<ayuda-extranjera></ayuda-extranjera>'
      });
  });
