'use strict';

describe('Component: DonarCentrosComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var DonarCentrosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DonarCentrosComponent = $componentController('DonarCentrosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
