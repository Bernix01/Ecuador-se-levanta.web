'use strict';

angular.module('ecuadorAyudaWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin.lugarAdm', {
        url: '/lugar',
        template: '<lugaradm></lugaradm>',
        authenticate: 'admin'
      });
      $stateProvider
      .state('admin.edit', {
        url: '/edit/:id',
        template: '<lugaradm></lugaradm>',
        authenticate: 'admin'
      });
  });
