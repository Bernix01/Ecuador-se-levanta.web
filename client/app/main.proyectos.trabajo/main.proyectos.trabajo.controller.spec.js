'use strict';

describe('Component: MainProyectosTrabajoComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var MainProyectosTrabajoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MainProyectosTrabajoComponent = $componentController('MainProyectosTrabajoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
