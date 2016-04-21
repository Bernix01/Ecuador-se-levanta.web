'use strict';

describe('Component: ServiciosComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var ServiciosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ServiciosComponent = $componentController('ServiciosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
