'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.recibir', {
        url: 'recibir',
        template: '<recibir></recibir>'
      });
  });
