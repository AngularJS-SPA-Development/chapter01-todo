'use strict';

describe('Directive: todo', function () {

  beforeEach(module('myToDoApp'));
  beforeEach(module('templates'));

  var element, scope;
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should todo list', inject(function ($compile) {
    scope.todo = 'hi peter';

    element = angular.element('<todo></todo>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('input').val()).toEqual('hi peter');
  }));
});
