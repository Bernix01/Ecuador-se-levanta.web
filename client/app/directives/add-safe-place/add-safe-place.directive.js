'use strict';

angular.module('ecuadorAyudaWebApp')
  .directive('addsafeplace', function($compile) {
    return function(scope, element, attrs) {
      element.bind("click", function() {
        angular.element(document.getElementById('space-for-buttons')).append($compile("")(scope));
      });
    };
  });
