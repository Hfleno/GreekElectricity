'use strict';

/**
 * @ngdoc overview
 * @name greekElectricityApp
 * @description
 * # greekElectricityApp
 *
 * Main module of the application.
 */
angular
  .module('greekElectricityApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        resolve: {
          logincheck: checkLoggedin
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();
  console.log('checkLoggedin');
  $http.get('/loggedin').success(function(user) {
    console.log('checkLoggedin asdasdasdasd');
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      console.log('User !== 0');
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      console.log('You need to log in.');
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}