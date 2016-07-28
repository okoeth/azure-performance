'use strict';

angular.module('bmbsPerformanceApp', [
  'ngRoute',
  'bmbsPerformanceApp.services',
  'bmbsPerformanceApp.controllers'
  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider.when('/main', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
  $routeProvider.otherwise({redirectTo: '/main'});

  /* CORS... */
  /* http://stackoverflow.com/questions/17289195/angularjs-post-data-to-external-rest-api */
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
