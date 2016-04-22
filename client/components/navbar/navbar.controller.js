'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Ayuda exranjera',
    'state': 'ayudaextranjera'
  }, {
    'title': 'Tips',
    'state': 'tips'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('ecuadorAyudaWebApp')
  .controller('NavbarController', NavbarController);
