'use strict';

angular.module('ecuadorAyudaWebApp.auth', [
  'ecuadorAyudaWebApp.constants',
  'ecuadorAyudaWebApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
