'use strict';

/**
 * @ngdoc function
 * @name myToDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myToDoApp
 */
angular.module('myToDoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
