'use strict';

describe('Component: MainProyectosDesechosComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var MainProyectosDesechosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MainProyectosDesechosComponent = $componentController('MainProyectosDesechosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
