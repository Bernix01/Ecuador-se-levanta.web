'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.image', {
        url: '/image',
        template: '<adminimage></adminimage>',
        authenticate: 'admin'
      });
  });
