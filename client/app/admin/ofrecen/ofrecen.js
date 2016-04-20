'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.ofrecenAdm', {
        url: '/admin/ofrecen',
        template: '<ofrecen></ofrecen>'
      });
  });
