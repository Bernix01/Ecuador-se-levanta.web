'use strict';

describe('Component: LugarComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var LugarComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LugarComponent = $componentController('LugarComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
