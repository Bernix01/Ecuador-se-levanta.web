'use strict';

describe('Component: MainProyectosViviendaComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var MainProyectosViviendaComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MainProyectosViviendaComponent = $componentController('MainProyectosViviendaComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
