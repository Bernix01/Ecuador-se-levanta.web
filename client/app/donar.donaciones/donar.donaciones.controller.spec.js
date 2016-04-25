'use strict';

describe('Component: DonarDonacionesComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var DonarDonacionesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DonarDonacionesComponent = $componentController('DonarDonacionesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
