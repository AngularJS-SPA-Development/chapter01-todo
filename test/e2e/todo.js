'use strict';

var TodoPage = require('./pages/todo-page.js');

describe('todo application', function() {
  var page;

  beforeEach(function() {
      page = new TodoPage();
      page.addTodo('hi peter');
  });

  describe('todo list', function() {
    it('should list todos', function() {
      expect(page.todoList.count()).toEqual(1);
      expect(page.todoAt(0)).toEqual('hi peter');
    });

    it('should add a todo', function() {
      page.addTodo('It is great thing');
      expect(page.todoList.count()).toEqual(2);
      expect(page.todoAt(1)).toEqual('It is great thing');
    });
  });
});
