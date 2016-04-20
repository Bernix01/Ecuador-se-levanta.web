'use strict';

describe('Directive: addSafePlace', function () {

  // load the directive's module and view
  beforeEach(module('ecuadorAyudaWebApp'));
  beforeEach(module('app/directives/add-safe-place/add-safe-place.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-safe-place></add-safe-place>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addSafePlace directive');
  }));
});
