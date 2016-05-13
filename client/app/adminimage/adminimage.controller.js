'use strict';
(function() {

  class AdminimageComponent {
    constructor($scope, Upload) {
      $scope.submit = function() {
        if ($scope.form.files.$valid && $scope.files) {
          $scope.uploadFiles($scope.files);
        }
      };
      // for multiple files:
      $scope.uploadFiles = function(files) {
        if (files && files.length) {
          // or send them all together for HTML5 browsers:
          Upload.upload({url: '/server/upload/url',
  headers : {
    'Content-Type': files[0].type
  },
            data: {
              file: files
            }
          });
        }
      }
    }
  }

  angular.module('ecuadorAyudaWebApp')
    .component('adminimage', {
      templateUrl: 'app/adminimage/adminimage.html',
      controller: AdminimageComponent
    });

})();
