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
  .controller('AppController', function($scope, $http) {
    var hero = {};
    $scope.data = {};
    $scope.data.epics = [
      {
        name: 'Frodo',
        story: "Frode was a bit of a goof ball, but he got the job done."
      },
      {
        name: 'Gandalf',
        story: "He is not to be messed with."
      }
    ]
    var createEpic = function(hero) {
      return $http({
        method: 'POST',
        url: '/epic',
        data: {hero: hero}
      }).then(function(res) {
        return res.status;
      });
    };
  });