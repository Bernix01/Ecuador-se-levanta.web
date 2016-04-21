'use strict';
(function() {

  class LugarComponent {
    constructor($http, $scope, socket, appConfig, $stateParams) {
      this._id = $stateParams.id;
      this.socket = socket;
      this.$http = $http;
      this.appConfig = appConfig;
      this.place = {};
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('places');
        socket.unsyncUpdates('place');
      });
    }
    $onInit() {
      this.$http.get('/api/places').then(response => {
        this.places = response.data;
        this.socket.syncUpdates('places', this.places);
      });
      if (this._id) {
        this.$http.get('/api/places/'+this._id).then(response => {
          this.place = response.data;
          this.socket.syncUpdates('place', this.place, (event, oldPlace, newPlace) => {
            this.place = newPlace;
          });
        });
      } else {
        this.needs = this.appConfig.needs;
      }
    }

    addBarebone() {
      console.log("pushed!");
      this.place.wtgo.push({
        name: "",
        tel: null,
        extra: ""
      });
    }

    remove(place) {
      var index = this.place.wtgo.indexOf(place);
      this.place.wtgo.splice(index, 1);
    }
    submit(form) {
      if (form.$valid) {
        if (this._id) {
          this.$http.put('/api/places/' + this._id, this.place).then(response => {
            alert("Actualizado! :-)");
          });
        } else {
          this.$http.post('/api/places', this.place).then(response => {
            alert("Agregado! :-)");
          });
        }
      }
    }
  }

  angular.module('ecuadorAyudaWebApp')
    .component('lugaradm', {
      templateUrl: 'app/admin/lugar/lugar.html',
      controller: LugarComponent,
      controllerAs: 'lugarctl'
    });

})();
