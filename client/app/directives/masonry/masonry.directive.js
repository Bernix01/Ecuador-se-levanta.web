'use strict';

angular.module('ecuadorAyudaWebApp')
  .directive('masonry', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          $(element).isotope({
            itemSelector: '.place',
            percentPosition: true,
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.col-sm-4'
            }
          });
      }
    };
  });
