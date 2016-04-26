'use strict';

(function() {

  class MainController {

    constructor($state, $scope) {
      $scope._s = $state;
      $scope.onHome = () =>{
        return $scope._s.$current.toString() === "main";
      }

    }

  }
  angular.module('ecuadorAyudaWebApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });

})();
