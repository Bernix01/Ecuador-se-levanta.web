'use strict';

angular.module('ecuadorAyudaWebApp', [
    'ecuadorAyudaWebApp.auth',
    'ecuadorAyudaWebApp.admin',
    'ecuadorAyudaWebApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $urlRouterProvider.when('/admin', '/admin/lugar');
  $urlRouterProvider.when('/ofrecen', '/ofrecen/servicios');
    $locationProvider.html5Mode(true);
  });
