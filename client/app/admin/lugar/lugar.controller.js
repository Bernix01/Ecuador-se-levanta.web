'use strict';
(function() {

  class LugarComponent {
    constructor($http, $scope, socket, appConfig, $stateParams) {
      this._id = $stateParams.id;
      console.log(this._id);
      this.$http = $http;
      this.appConfig = appConfig;
      this.message = 'Hello';
      this.safeplaces = [];
      this.place = {};
    }
    $onInit() {
      this.$http.get('/api/places').then(response => {
        this.places = response.data;
      });
      if (this._id) {
        this.$http.get('/api/places', this._id).then(response => {
          this.place = response.data[0];
          this.needs = this.place.needs;
          this.safeplaces = this.place.wtgo;
        });
      } else {
        this.needs = this.appConfig.needs;
      }
    }

    addBarebone() {
      console.log("pushed!");
      this.safeplaces.push({
        name: "",
        tel: null,
        extra: ""
      });
    }

    submit(form) {
      if (form.$valid) {
        this.place.wtgo = this.safeplaces;
        this.place.needs = this.needs;
        console.log(this.place);
        if(this._id){
          this.$http.put('/api/places/'+this._id, this.place).then(response => {
            alert("Listo! :-)");
          });
        }else{
        this.$http.post('/api/places', this.place).then(response => {
          alert("Listo! :-)");
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
