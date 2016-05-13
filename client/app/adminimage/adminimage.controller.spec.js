'use strict';

describe('Component: AdminimageComponent', function () {

  // load the controller's module
  beforeEach(module('ecuadorAyudaWebApp'));

  var AdminimageComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AdminimageComponent = $componentController('AdminimageComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
