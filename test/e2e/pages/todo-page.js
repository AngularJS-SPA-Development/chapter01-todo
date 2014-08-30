'use strict';

var TodoPage = function () {
  browser.get('/#');
};

TodoPage.prototype = Object.create({}, {
  // get
  todoModel: { get: function () { return element(by.model('todo')); }},
  addButton: { get: function () { return element(by.css('[value="추가"]')); }},
  todoList: { get: function () { return element.all(by.repeater('todo in todos')); }},
  // set
  addTodo: { value: function (todoValue) {
    this.todoModel.sendKeys(todoValue);
    this.addButton.click();
  }},
  todoAt: { value: function (idx) { 
    return this.todoList.get(idx).$('input').getAttribute('value');
  }}
});

module.exports = TodoPage;