'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('TodoCtrl', function ($scope, todoService) {
    $scope.todos = todoService.getTodo();

    $scope.addTodo = function () {
      todoService.addTodo($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      todoService.removeTodo(index);
    };
  });
