'use strict';

angular.module('ecuadorAyudaWebApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        abstract:true,
        templateUrl: 'app/admin/admin.html',
        authenticate: 'admin'
      });
  });
