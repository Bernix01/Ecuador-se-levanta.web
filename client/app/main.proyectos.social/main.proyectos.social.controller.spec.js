'use strict';

describe('Component: MainProyectosSocialComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var MainProyectosSocialComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MainProyectosSocialComponent = $componentController('MainProyectosSocialComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
