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
          this.place = response.data;
          this.socket.syncUpdates('place', this.place);
          var placescnt = document.getElementsByClassName("places");
          var wrappedRes = angular.element(placescnt);

          wrappedRes.masonry({ "itemSelector": ".place", "columnWidth": ".col-sm-4", "percentPosition": true });
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
