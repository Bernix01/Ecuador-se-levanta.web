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
        }, function(data, status) {
          self.$state.go('^.lugarAdm');
        });
      } else {
        this.place.needs = this.appConfig.needs;
      }
    }

    addBarebone() {
      this.place.wtgo.push({
        name: '',
        tel: '',
        extra: '',
        lat: '',
        long: '',
        needs: this.appConfig.needs
      });
    }

    delete() {
      this.$http.delete('/api/places/' + this._id).then(response => {
        alert('Deleted!');
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
          this.updateModel(this.place);
          this.$http.put('/api/places/' + this._id, this.place).then(response => {
            alert('Actualizado! :-)');
          });
        } else {
          this.$http.post('/api/places', this.place).then(response => {
            alert('Agregado! :-)');
            this.$state.go('^.editPlace', {
              id: response.data._id
            });
          });
        }
      }
    }
    updateModel(place) {
      place.wtgo.forEach((el) => {
        if (el.needs === undefined) {
          el.needs = this.appConfig.needs;
        }
        if(el.z0 === undefined){
          el.z0 = false;
        }
      });
    }
  }

  angular.module('ecuadorAyudaWebApp')
    .component('lugaradm', {
      templateUrl: 'app/admin/lugar/lugar.html',
      controller: LugarComponent,
      controllerAs: 'lugarctl'
    });

})();
