'use strict';

describe('Component: GaleriaComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var GaleriaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    GaleriaComponent = $componentController('GaleriaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
