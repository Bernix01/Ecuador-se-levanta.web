'use strict';
(function() {

  class LugarComponent {
    constructor($http, $scope, appConfig, $stateParams, $state) {
      this._id = $stateParams.id;
      this.$state = $state;
      this.$http = $http;
      this.appConfig = appConfig;
      this.place = {};
      this.place.wtgo = [];
    }
    $onInit() {
      this.$http.get('/api/places').then(response => {
        this.places = response.data;
      });
      if (this._id) {
        var self = this;
        this.$http.get('/api/places/' + this._id).then(response => {
          this.place = response.data;
          console.log("original");
          console.log(this.place);
        },function(data, status) {
          self.$state.go('^.lugarAdm');
        });
      } else {
        this.place.needs = this.appConfig.needs;
      }
    }

    addBarebone() {
      this.place.wtgo.push({
        name: "",
        tel: "",
        extra: "",
        lat: "",
        long: ""
      });
        console.log(this.place.wtgo);
    }

    delete() {
      this.$http.delete("/api/places/" + this._id).then(response => {
        alert("Deleted!");
        this.$state.go('^.lugarAdm');
      });
    }
    remove(place) {
      var index = this.place.wtgo.indexOf(place);
      this.place.wtgo.splice(index, 1);
    }
    submit(form) {
      if (form.$valid) {
        if (this._id) {
          console.log(this.place.wtgo);
          this.$http.put('/api/places/' + this._id, this.place).then(response => {
            alert("Actualizado! :-)");
            console.log(response.data);
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
