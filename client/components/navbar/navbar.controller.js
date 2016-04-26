'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Iniciar sesión',
    'state': 'login'
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
