"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}angular.module("ecuadorAyudaWebApp",["ecuadorAyudaWebApp.auth","ecuadorAyudaWebApp.admin","ecuadorAyudaWebApp.constants","ngCookies","ngResource","ngSanitize","btford.socket-io","ui.router","ui.bootstrap","validation.match"]).config(["$urlRouterProvider","$locationProvider",function(a,b){a.otherwise("/"),b.html5Mode(!0)}]),angular.module("ecuadorAyudaWebApp.admin",["ecuadorAyudaWebApp.auth","ui.router"]),angular.module("ecuadorAyudaWebApp.auth",["ecuadorAyudaWebApp.constants","ecuadorAyudaWebApp.util","ngCookies","ui.router"]).config(["$httpProvider",function(a){a.interceptors.push("authInterceptor")}]),angular.module("ecuadorAyudaWebApp.util",[]),angular.module("ecuadorAyudaWebApp").config(["$stateProvider",function(a){a.state("main",{url:"/",template:"<main></main>"})}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var a=function(){function a(b){_classCallCheck(this,a),this.users=b.query()}return a.$inject=["User"],_createClass(a,[{key:"delete",value:function(a){a.$remove(),this.users.splice(this.users.indexOf(a),1)}}]),a}();angular.module("ecuadorAyudaWebApp.admin").controller("AdminController",a)}(),angular.module("ecuadorAyudaWebApp").config(["$stateProvider",function(a){a.state("login",{url:"/login",templateUrl:"app/account/login/login.html",controller:"LoginController",controllerAs:"vm"}).state("logout",{url:"/logout?referrer",referrer:"main",template:"",controller:["$state","Auth",function(a,b){var c=a.params.referrer||a.current.referrer||"main";b.logout(),a.go(c)}]}).state("signup",{url:"/signup",templateUrl:"app/account/signup/signup.html",controller:"SignupController",controllerAs:"vm"}).state("settings",{url:"/settings",templateUrl:"app/account/settings/settings.html",controller:"SettingsController",controllerAs:"vm",authenticate:!0})}]).run(["$rootScope",function(a){a.$on("$stateChangeStart",function(a,b,c,d){"logout"===b.name&&d&&d.name&&!d.authenticate&&(b.referrer=d.name)})}]),angular.module("ecuadorAyudaWebApp.admin").config(["$stateProvider",function(a){a.state("admin",{url:"/admin",templateUrl:"app/admin/admin.html",authenticate:"admin"})}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var a=function(){function a(b,c,d,e,f){_classCallCheck(this,a),this._id=f.id,console.log(this._id),this.$http=b,this.appConfig=e,this.message="Hello",this.safeplaces=[],this.place={}}return a.$inject=["$http","$scope","socket","appConfig","$stateParams"],_createClass(a,[{key:"$onInit",value:function(){var a=this;this.$http.get("/api/places").then(function(b){a.places=b.data}),this._id?this.$http.get("/api/places",this._id).then(function(b){a.place=b.data[0],a.needs=a.place.needs,a.safeplaces=a.place.wtgo}):this.needs=this.appConfig.needs}},{key:"addBarebone",value:function(){console.log("pushed!"),this.safeplaces.push({name:"",telf:null,lat:null,"long":null})}},{key:"submit",value:function(a){a.$valid&&(this.place.wtgo=this.safeplaces,this.place.needs=this.needs,this._id?this.$http.put("/api/places/"+this._id,this.place).then(function(a){alert("Listo! :-)")}):this.$http.post("/api/places",this.place).then(function(a){alert("Listo! :-)")}))}}]),a}();angular.module("ecuadorAyudaWebApp").component("lugaradm",{templateUrl:"app/admin/lugar/lugar.html",controller:a,controllerAs:"lugarctl"})}(),angular.module("ecuadorAyudaWebApp").config(["$stateProvider",function(a){a.state("admin.lugarAdm",{url:"/lugar",template:"<lugaradm></lugaradm>",authenticate:"admin"}),a.state("admin.edit",{url:"/edit/:id",template:"<lugaradm></lugaradm>",authenticate:"admin"})}]),function(){var a=function b(){_classCallCheck(this,b),this.message="Hello"};angular.module("ecuadorAyudaWebApp").component("ofrecen",{templateUrl:"app/admin/ofrecen/ofrecen/ofrecen.html",controller:a})}(),angular.module("ecuadorAyudaWebApp").config(["$stateProvider",function(a){a.state("admin.ofrecenAdm",{url:"/admin/ofrecen",template:"<ofrecen></ofrecen>"})}]),function(a,b){a.module("ecuadorAyudaWebApp.constants",[]).constant("appConfig",{userRoles:["guest","user","admin"],needs:[{name:"Alimentos",state:!1,detail:"",image:"assets/images/alimentos.7853e8e9.png"},{name:"Medicina",state:!1,detail:"",image:"assets/images/Medicinas.559169f2.png"},{name:"Productos de aseo",state:!1,detail:"",image:"assets/images/aseo.5bff5a7b.png"},{name:"Otros",state:!1,detail:"",image:"assets/images/otros.2e6bd944.png"},{name:"Vituallas",state:!1,detail:"",image:"assets/images/vituallas.6e144f9f.png"},{name:"Ropa",state:!1,detail:"",image:"assets/images/ropa.f97afd55.png"}]})}(angular),angular.module("ecuadorAyudaWebApp").directive("addsafeplace",["$compile",function(a){return function(b,c,d){c.bind("click",function(){angular.element(document.getElementById("space-for-buttons")).append(a("")(b))})}}]),function(){var a=function b(){_classCallCheck(this,b),this.message="Hello"};angular.module("ecuadorAyudaWebApp").component("lugar",{templateUrl:"app/lugar/lugar.html",controller:a})}(),angular.module("ecuadorAyudaWebApp").config(["$stateProvider",function(a){a.state("main.lugar",{url:"/lugar",template:"<lugar></lugar>"})}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(){var a=function(){function a(b,c,d){_classCallCheck(this,a),this.$http=b,this.socket=d,this.awesomeThings=[],c.$on("$destroy",function(){d.unsyncUpdates("thing")})}return a.$inject=["$http","$scope","socket"],_createClass(a,[{key:"$onInit",value:function(){var a=this;this.$http.get("/api/things").then(function(b){a.awesomeThings=b.data,a.socket.syncUpdates("thing",a.awesomeThings)})}},{key:"addThing",value:function(){this.newThing&&(this.$http.post("/api/things",{name:this.newThing}),this.newThing="")}},{key:"deleteThing",value:function(a){this.$http["delete"]("/api/things/"+a._id)}}]),a}();angular.module("ecuadorAyudaWebApp").component("main",{templateUrl:"app/main/main.html",controller:a})}();var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),LoginController=function(){function a(b,c){_classCallCheck(this,a),this.user={},this.errors={},this.submitted=!1,this.Auth=b,this.$state=c}return a.$inject=["Auth","$state"],_createClass(a,[{key:"login",value:function(a){var b=this;this.submitted=!0,a.$valid&&this.Auth.login({email:this.user.email,password:this.user.password}).then(function(){b.$state.go("main")})["catch"](function(a){b.errors.other=a.message})}}]),a}();angular.module("ecuadorAyudaWebApp").controller("LoginController",LoginController),function(){var a=function b(){_classCallCheck(this,b),this.message="Hello"};angular.module("ecuadorAyudaWebApp").component("ofrecen",{templateUrl:"app/ofrecen/ofrecen.html",controller:a})}(),angular.module("ecuadorAyudaWebApp").config(["$stateProvider",function(a){a.state("main.ofrecen",{url:"/ofrecen",template:"<ofrecen></ofrecen>"})}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),SettingsController=function(){function a(b){_classCallCheck(this,a),this.errors={},this.submitted=!1,this.Auth=b}return a.$inject=["Auth"],_createClass(a,[{key:"changePassword",value:function(a){var b=this;this.submitted=!0,a.$valid&&this.Auth.changePassword(this.user.oldPassword,this.user.newPassword).then(function(){b.message="Password successfully changed."})["catch"](function(){a.password.$setValidity("mongoose",!1),b.errors.other="Incorrect password",b.message=""})}}]),a}();angular.module("ecuadorAyudaWebApp").controller("SettingsController",SettingsController),function(){function a(a,b,c,d,e,f,g){var h=f.safeCb,i={},j=e.userRoles||[];c.get("token")&&"/logout"!==a.path()&&(i=g.get());var k={login:function(a,e){var f=a.email,j=a.password;return b.post("/auth/local",{email:f,password:j}).then(function(a){return c.put("token",a.data.token),i=g.get(),i.$promise}).then(function(a){return h(e)(null,a),a})["catch"](function(a){return k.logout(),h(e)(a.data),d.reject(a.data)})},logout:function(){c.remove("token"),i={}},createUser:function(a,b){return g.save(a,function(d){return c.put("token",d.token),i=g.get(),h(b)(null,a)},function(a){return k.logout(),h(b)(a)}).$promise},changePassword:function(a,b,c){return g.changePassword({id:i._id},{oldPassword:a,newPassword:b},function(){return h(c)(null)},function(a){return h(c)(a)}).$promise},getCurrentUser:function(a){if(0===arguments.length)return i;var b=i.hasOwnProperty("$promise")?i.$promise:i;return d.when(b).then(function(b){return h(a)(b),b},function(){return h(a)({}),{}})},isLoggedIn:function(a){return 0===arguments.length?i.hasOwnProperty("role"):k.getCurrentUser(null).then(function(b){var c=b.hasOwnProperty("role");return h(a)(c),c})},hasRole:function l(a,b){var l=function(a,b){return j.indexOf(a)>=j.indexOf(b)};return arguments.length<2?l(i.role,a):k.getCurrentUser(null).then(function(c){var d=c.hasOwnProperty("role")?l(c.role,a):!1;return h(b)(d),d})},isAdmin:function(){return k.hasRole.apply(k,[].concat.apply(["admin"],arguments))},getToken:function(){return c.get("token")}};return k}a.$inject=["$location","$http","$cookies","$q","appConfig","Util","User"],angular.module("ecuadorAyudaWebApp.auth").factory("Auth",a)}(),function(){function a(a,b,c,d,e){var f;return{request:function(a){return a.headers=a.headers||{},c.get("token")&&e.isSameOrigin(a.url)&&(a.headers.Authorization="Bearer "+c.get("token")),a},responseError:function(a){return 401===a.status&&((f||(f=d.get("$state"))).go("login"),c.remove("token")),b.reject(a)}}}a.$inject=["$rootScope","$q","$cookies","$injector","Util"],angular.module("ecuadorAyudaWebApp.auth").factory("authInterceptor",a)}(),function(){angular.module("ecuadorAyudaWebApp.auth").run(["$rootScope","$state","Auth",function(a,b,c){a.$on("$stateChangeStart",function(a,d){d.authenticate&&("string"==typeof d.authenticate?c.hasRole(d.authenticate,_.noop).then(function(d){return d?void 0:(a.preventDefault(),c.isLoggedIn(_.noop).then(function(a){b.go(a?"main":"login")}))}):c.isLoggedIn(_.noop).then(function(c){c||(a.preventDefault(),b.go("main"))}))})}])}(),function(){function a(a){return a("/api/users/:id/:controller",{id:"@_id"},{changePassword:{method:"PUT",params:{controller:"password"}},get:{method:"GET",params:{id:"me"}}})}a.$inject=["$resource"],angular.module("ecuadorAyudaWebApp.auth").factory("User",a)}(),angular.module("ecuadorAyudaWebApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("ecuadorAyudaWebApp").factory("Modal",["$rootScope","$uibModal",function(a,b){function c(){var c=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],d=arguments.length<=1||void 0===arguments[1]?"modal-default":arguments[1],e=a.$new();return angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(){var a=arguments.length<=0||void 0===arguments[0]?angular.noop:arguments[0];return function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("ecuadorAyudaWebApp").directive("mongooseError",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){b.on("keydown",function(){return d.$setValidity("mongoose",!0)})}}});var NavbarController=function a(b){_classCallCheck(this,a),this.menu=[{title:"Home",state:"main"}],this.isCollapsed=!0,this.isLoggedIn=b.isLoggedIn,this.isAdmin=b.isAdmin,this.getCurrentUser=b.getCurrentUser};NavbarController.$inject=["Auth"],angular.module("ecuadorAyudaWebApp").controller("NavbarController",NavbarController),angular.module("ecuadorAyudaWebApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarController",controllerAs:"nav"}}),angular.module("ecuadorAyudaWebApp").factory("socket",["socketFactory",function(a){var b=io("",{path:"/socket.io-client"}),c=a({ioSocket:b});return{socket:c,syncUpdates:function(a,b,d){d=d||angular.noop,c.on(a+":save",function(a){var c=_.find(b,{_id:a._id}),e=b.indexOf(c),f="created";c?(b.splice(e,1,a),f="updated"):b.push(a),d(f,a,b)}),c.on(a+":remove",function(a){var c="deleted";_.remove(b,{_id:a._id}),d(c,a,b)})},unsyncUpdates:function(a){c.removeAllListeners(a+":save"),c.removeAllListeners(a+":remove")}}}]);var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),SignupController=function(){function a(b,c){_classCallCheck(this,a),this.user={},this.errors={},this.submitted=!1,this.Auth=b,this.$state=c}return a.$inject=["Auth","$state"],_createClass(a,[{key:"register",value:function(a){var b=this;this.submitted=!0,a.$valid&&this.Auth.createUser({name:this.user.name,email:this.user.email,password:this.user.password}).then(function(){b.$state.go("main")})["catch"](function(c){c=c.data,b.errors={},angular.forEach(c.errors,function(c,d){a[d].$setValidity("mongoose",!1),b.errors[d]=c.message})})}}]),a}();angular.module("ecuadorAyudaWebApp").controller("SignupController",SignupController),function(){function a(a){var b={safeCb:function(a){return angular.isFunction(a)?a:angular.noop},urlParse:function(a){var b=document.createElement("a");return b.href=a,""===b.host&&(b.href=b.href),b},isSameOrigin:function(c,d){return c=b.urlParse(c),d=d&&[].concat(d)||[],d=d.map(b.urlParse),d.push(a.location),d=d.filter(function(a){return c.hostname===a.hostname&&c.port===a.port&&c.protocol===a.protocol}),d.length>=1}};return b}a.$inject=["$window"],angular.module("ecuadorAyudaWebApp.util").factory("Util",a)}(),angular.module("ecuadorAyudaWebApp").run(["$templateCache",function(a){a.put("app/account/login/login.html",'<div class=container><div class=row><div class=col-sm-12><h1>Login</h1><p>Accounts are reset on server restart from <code>server/config/seed.js</code>. Default account is <code>test@example.com</code> / <code>test</code></p><p>Admin account is <code>admin@example.com</code> / <code>admin</code></p></div><div class=col-sm-12><form class=form name=form ng-submit=vm.login(form) novalidate><div class=form-group><label>Email</label><input type=email name=email class=form-control ng-model=vm.user.email required></div><div class=form-group><label>Password</label><input type=password name=password class=form-control ng-model=vm.user.password required></div><div class="form-group has-error"><p class=help-block ng-show="form.email.$error.required && form.password.$error.required && vm.submitted">Please enter your email and password.</p><p class=help-block ng-show="form.email.$error.email && vm.submitted">Please enter a valid email.</p><p class=help-block>{{ vm.errors.other }}</p></div><div><button class="btn btn-inverse btn-lg btn-login" type=submit>Login</button> <a class="btn btn-default btn-lg btn-register" ui-sref=signup>Register</a></div></form></div></div><hr></div>'),a.put("app/account/settings/settings.html",'<div class=container><div class=row><div class=col-sm-12><h1>Change Password</h1></div><div class=col-sm-12><form class=form name=form ng-submit=vm.changePassword(form) novalidate><div class=form-group><label>Current Password</label><input type=password name=password class=form-control ng-model=vm.user.oldPassword mongoose-error><p class=help-block ng-show=form.password.$error.mongoose>{{ vm.errors.other }}</p></div><div class=form-group><label>New Password</label><input type=password name=newPassword class=form-control ng-model=vm.user.newPassword ng-minlength=3 required><p class=help-block ng-show="(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || vm.submitted)">Password must be at least 3 characters.</p></div><div class=form-group><label>Confirm New Password</label><input type=password name=confirmPassword class=form-control ng-model=vm.user.confirmPassword match=vm.user.newPassword ng-minlength=3 required><p class=help-block ng-show="form.confirmPassword.$error.match && vm.submitted">Passwords must match.</p></div><p class=help-block>{{ vm.message }}</p><button class="btn btn-lg btn-primary" type=submit>Save changes</button></form></div></div></div>'),a.put("app/account/signup/signup.html",'<div class=container><div class=row><div class=col-sm-12><h1>Sign up</h1></div><div class=col-sm-12><form class=form name=form ng-submit=vm.register(form) novalidate><div class=form-group ng-class="{ \'has-success\': form.name.$valid && vm.submitted,\n                                            \'has-error\': form.name.$invalid && vm.submitted }"><label>Name</label><input name=name class=form-control ng-model=vm.user.name required><p class=help-block ng-show="form.name.$error.required && vm.submitted">A name is required</p></div><div class=form-group ng-class="{ \'has-success\': form.email.$valid && vm.submitted,\n                                            \'has-error\': form.email.$invalid && vm.submitted }"><label>Email</label><input type=email name=email class=form-control ng-model=vm.user.email required mongoose-error><p class=help-block ng-show="form.email.$error.email && vm.submitted">Doesn\'t look like a valid email.</p><p class=help-block ng-show="form.email.$error.required && vm.submitted">What\'s your email address?</p><p class=help-block ng-show=form.email.$error.mongoose>{{ vm.errors.email }}</p></div><div class=form-group ng-class="{ \'has-success\': form.password.$valid && vm.submitted,\n                                            \'has-error\': form.password.$invalid && vm.submitted }"><label>Password</label><input type=password name=password class=form-control ng-model=vm.user.password ng-minlength=3 required mongoose-error><p class=help-block ng-show="(form.password.$error.minlength || form.password.$error.required) && vm.submitted">Password must be at least 3 characters.</p><p class=help-block ng-show=form.password.$error.mongoose>{{ vm.errors.password }}</p></div><div class=form-group ng-class="{ \'has-success\': form.confirmPassword.$valid && vm.submitted,\n                                            \'has-error\': form.confirmPassword.$invalid && vm.submitted }"><label>Confirm Password</label><input type=password name=confirmPassword class=form-control ng-model=vm.user.confirmPassword match=vm.user.password ng-minlength=3 required><p class=help-block ng-show="form.confirmPassword.$error.match && vm.submitted">Passwords must match.</p></div><div><button class="btn btn-inverse btn-lg btn-register" type=submit>Sign up</button> <a class="btn btn-default btn-lg btn-login" ui-sref=login>Login</a></div></form></div></div><hr></div>'),a.put("app/admin/admin.html","<div class=container><div ui-view></div></div>"),a.put("app/admin/lugar/lugar.html",'<div class=container><header><h1>Agregar un nuevo lugar</h1><br></header><form name=form class=form-horizontal ng-submit=lugarctl.submit(form) novalidate><div class=form-group><label for=name class="col-sm-2 control-label">Nombre</label><div class=col-sm-10><input id=name class="form-control input-lg" placeholder=Nombre ng-model=lugarctl.place.name></div></div><div class=form-group><label for=name class="col-sm-2 control-label">Latitud</label><div class=col-sm-10><input type=number id=name class="form-control input-lg" placeholder=latitud ng-model=lugarctl.place.loc.type[1]></div></div><div class=form-group><label for=name class="col-sm-2 control-label">Longitud</label><div class=col-sm-10><input type=number id=name class="form-control input-lg" placeholder=longitud ng-model=lugarctl.place.loc.type[0]></div></div><div class=form-group><label for=name class="col-sm-2 control-label">Qué se necesita</label><div class="col-sm-offset-2 col-sm-10"><div class=checkbox ng-repeat="need in lugarctl.needs"><label><img src="" ng-src=need.image alt="{{need.name}}"> <input type=checkbox ng-model=need.state> {{need.name}}<br><textarea name=detail class=form-control rows=8 cols=40 ng-show=need.state ng-model=need.detail></textarea></label></div></div></div><div class=form-group><label for=name class="col-sm-2 control-label">Cómo llegar</label><div class=col-sm-10><textarea name=llegar class=form-control rows=8 cols=40 ng-model=lugarctl.place.htgo></textarea></div></div><div class=form-group><label class="col-sm-2 control-label">A dónde ir</label><div class="row col-sm-10"><div class="col col-sm-4 place" ng-repeat="place in lugarctl.safeplaces"><input class="form-control input-md" placeholder=Nombre ng-model=place.name><br><input type=tel class="form-control input-md" placeholder=Telefono ng-model=place.tel><br><input class="form-control input-sm c" placeholder=Lat ng-model=place.loc.type[1]> <input class="form-control input-sm c" placeholder=Long ng-model=place.loc.type[0]><div class="clearfix visible-xs-block"></div></div><div class="clearfix visible-xs-block"></div><div class="btn btn-lg btn-default" ng-click=lugarctl.addBarebone()>Agregar</div></div></div><button type=submit class="btn btn-lg btn-default pull-right">Enviar</button></form><div class=row><div class="col col-sm-3" ng-repeat="place in lugarctl.places"><h3>{{place.name}}</h3><a href=# ui-sref="^.edit({id: \'{{place._id}}\'})">editar</a></div></div></div>'),a.put("app/admin/ofrecen/ofrecen.html","<div>This is the ofrecen view.</div>"),a.put("app/directives/add-safe-place/add-safe-place.html","<div>this is the addSafePlace directive</div>"),a.put("app/lugar/lugar.html","<div>This is the lugar view.</div>"),a.put("app/main/main.html",'<div class=himage></div><div class=row><div class="col col-md-4 menu"><h3>Qué se ofrece</h3><hr><a href=#>Servicios</a> <a href=#>Proveedores</a><h3>Lugares</h3><hr><a href=#>Servicios</a></div><div class="col col-md-8 cnt"><div ui-view=ofrecen></div></div></div>'),a.put("app/ofrecen/ofrecen.html","<div>This is the ofrecen view.</div>"),a.put("components/footer/footer.html",'<div class=container><p>Angular Fullstack v3.5.0 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></div>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarController><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="nav.isCollapsed = !nav.isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href=/ class=navbar-brand>ecuador-ayuda-web</a></div><div uib-collapse=nav.isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in nav.menu" ui-sref-active=active><a ui-sref={{item.state}}>{{item.title}}</a></li><li ng-show=nav.isAdmin() ui-sref-active=active><a ui-sref=admin>Admin</a></li></ul><ul class="nav navbar-nav navbar-right"><li ng-hide=nav.isLoggedIn() ui-sref-active=active><a ui-sref=signup>Sign up</a></li><li ng-hide=nav.isLoggedIn() ui-sref-active=active><a ui-sref=login>Login</a></li><li ng-show=nav.isLoggedIn()><p class=navbar-text>Hello {{ nav.getCurrentUser().name }}</p></li><li ng-show=nav.isLoggedIn() ui-sref-active=active><a ui-sref=settings><span class="glyphicon glyphicon-cog"></span></a></li><li ng-show=nav.isLoggedIn()><a ui-sref=logout>Logout</a></li></ul></div></div></div>')}]);