'use strict';

describe('Component: TipsComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var TipsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TipsComponent = $componentController('TipsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
