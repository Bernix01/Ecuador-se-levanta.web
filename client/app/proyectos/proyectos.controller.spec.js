'use strict';

describe('Component: ProyectosComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var ProyectosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProyectosComponent = $componentController('ProyectosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
