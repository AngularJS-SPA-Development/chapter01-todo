'use strict';

/**
 * @ngdoc service
 * @name myToDoApp.todoService
 * @description
 * # todoService
 * Service in the myToDoApp.
 */
angular.module('myToDoApp')
  .service('todoService', function todoService() {
    var todos = [];
    this.getTodo = function() {
      return todos; 
    }
    this.addTodo = function (todo) {
      todos.push(todo);
    };
    this.removeTodo = function (index) {
      todos.splice(index, 1);
    };
  });
