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
    $scope.hero = {};
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
    ];
    var newEpic = function(hero) {
      console.log('newEpic')
      return $http({
        method: 'POST',
        url: '/epic',
        data: hero
      }).then(function(res) {
        return res.status;
        initializeLinks();
      });
    };
    $scope.createEpic = function() {
      console.log('createEpic' + $scope.hero)
      newEpic($scope.hero);
      $scope.hero="";
    }
    var getAll = function () {
      return $http({
        method: 'GET',
        url: '/epic'
      })
      .then(function (resp) {
        return resp.data;
      });
    };
    var initializeLinks = function () {
    getAll()
      .then(function (epics) {
        $scope.data.epics = epics.reverse();
      })
      .catch(function (error) {
        console.error(error);
      });
    };
    initializeLinks();
    setInterval(initializeLinks, 3000);
});