'use strict';

describe('Component: OfrecenComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var OfrecenComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    OfrecenComponent = $componentController('OfrecenComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
