'use strict';

describe('Component: ProveedoresComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var ProveedoresComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProveedoresComponent = $componentController('ProveedoresComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
