'use strict';
(function() {

  class LugarComponent {

    constructor($http, $scope, socket, $stateParams) {
      this._id = $stateParams.id;
      this.$http = $http;
      this.socket = socket;
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('place');
      });
      console.log(this._id);
      if (this._id) {
        this.$http.get('/api/places/' + this._id).then(response => {
          console.log(response);
          this.place = response.data;
          this.socket.syncUpdates('place', this.place);
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
