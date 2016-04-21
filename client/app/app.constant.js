(function(angular, undefined) {
'use strict';

angular.module('ecuadorAyudaWebApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],needs:[{name:'Alimentos',state:false,detail:'',image:'assets/images/alimentos.png'},{name:'Medicina',state:false,detail:'',image:'assets/images/Medicinas.png'},{name:'Productos de aseo',state:false,detail:'',image:'assets/images/aseo.png'},{name:'Otros',state:false,detail:'',image:'assets/images/otros.png'},{name:'Vituallas',state:false,detail:'',image:'assets/images/vituallas.png'},{name:'Ropa',state:false,detail:'',image:'assets/images/ropa.png'},{name:'Mascotas',state:false,detail:'',image:'assets/images/animales.png'}]})

;
})(angular);