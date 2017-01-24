angular.module('middlearthify', ['ngRoute'])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        controller: 'AppController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppController', function($scope) {

  });