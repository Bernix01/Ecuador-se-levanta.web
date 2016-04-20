'use strict';

angular.module('ecuadorAyudaWebApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        authenticate: 'admin'
      });
  });
