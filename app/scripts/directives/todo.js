'use strict';

/**
 * @ngdoc directive
 * @name myToDoApp.directive:todo
 * @description
 * # todo
 */
angular.module('myToDoApp')
  .directive('todo', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/todo-list.html',
      link: function postLink(scope, element, attrs) {}
    };
  });
