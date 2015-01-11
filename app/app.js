'use strict';

/* App Module */

var packageBuilderApp = angular.module('packageBuilderApp', [
  'ngRoute',
  'packageBuilderControllers'
//  'packageBuilderServices'
//  'packageBuilderFilters',
//  'packageBuilderAnimations',
]);

packageBuilderApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'packagesCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      }).
      when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'settingsCtrl'
      }).
      when('/:innerlink', {
        templateUrl: 'partials/home.html.innerlink',
        controller: 'packageCtrl'
      }).
//      when('/new', {
//        templateUrl: 'partials/new.html',
//        controller: 'newAppCtrl'
//      }).
//        when('/remove', {
//          templateUrl: 'partials/remove.html',
//          controller: 'removeCtrl'
//        }).
//      when('/phones/:phoneId', {
//        templateUrl: 'partials/phone-detail.html',
//        controller: 'PhoneDetailCtrl'
//      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);



//// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.version'
//]).
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/home'});
//}]);
