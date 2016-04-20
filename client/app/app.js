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

    $locationProvider.html5Mode(true);
  });
