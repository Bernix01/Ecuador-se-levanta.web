'use strict';

describe('Component: DonarServiciosComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var DonarServiciosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DonarServiciosComponent = $componentController('DonarServiciosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
