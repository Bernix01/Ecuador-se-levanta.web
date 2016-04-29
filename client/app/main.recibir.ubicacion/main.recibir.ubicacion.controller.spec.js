'use strict';

describe('Component: MainRecibirUbicacionComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var MainRecibirUbicacionComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MainRecibirUbicacionComponent = $componentController('MainRecibirUbicacionComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
