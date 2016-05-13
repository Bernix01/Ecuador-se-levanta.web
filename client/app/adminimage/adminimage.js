'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.image', {
        url: '/mage',
        template: '<adminimage></adminimage>'
      });
  });
