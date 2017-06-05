'use strict';

/**
 * @ngdoc function
 * @name greekElectricityApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the greekElectricityApp
 */
angular.module('greekElectricityApp')
  .controller('AboutCtrl', function () {
    console.log('About');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
