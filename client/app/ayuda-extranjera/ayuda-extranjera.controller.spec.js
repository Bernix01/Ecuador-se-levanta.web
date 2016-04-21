'use strict';

describe('Component: AyudaExtranjeraComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var AyudaExtranjeraComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AyudaExtranjeraComponent = $componentController('AyudaExtranjeraComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
