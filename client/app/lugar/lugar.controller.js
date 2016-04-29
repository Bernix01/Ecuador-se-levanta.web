'use strict';
(function() {

  class LugarComponent {

    constructor($http, $scope, smoothScroll, socket, $stateParams) {
      this._id = $stateParams.id;
      this.$http = $http;
      this.socket = socket;
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('place');
      });
      this.smoothScroll = smoothScroll;
      var options = {
        duration: 500,
        easing: 'easeInQuad',
        offset: 30,
        containerId: 'custom-container-id'
      }

      if (this._id) {
        this.$http.get('/api/places/' + this._id).then(response => {
          $scope.place = response.data;
          this.socket.syncUpdates('place', this.place);
          var element = document.getElementById('place');
          this.smoothScroll(element,options);
        });
      }
    }
  }

  angular.module('ecuadorAyudaWebApp')
    .component('lugar', {
      templateUrl: 'app/lugar/lugar.html',
      controller: LugarComponent,
      controllerAs: 'vm'
    });

})();
