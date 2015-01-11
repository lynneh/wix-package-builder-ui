'use strict';

/* Controllers */
//
var packageBuilderControllers = angular.module('packageBuilderControllers', []);

packageBuilderControllers.controller('PackagesCtrl', ['$scope', function($scope){
//  packageBuilderControllers.controller('PackagesCtrl', ['$scope', 'Packages', function($scope, Packages) {
//    $scope.packages = Packages.query();
////    $scope.orderProp = 'name';
  }]);

packageBuilderControllers.controller('AboutCtrl', ['$scope', function($scope) {

}]);

packageBuilderControllers.controller('SettingsCtrl', ['$scope', function($scope) {
//    $scope.wixSettings = [{"artefact": "statics-norm", "group": "prospero", "name": "norm", "target": "opt/norm/current"},
//        {"artefact": "default", "group": "wix_mcloud_test_team", "name": "lynne", "target": "gcs"}];
//    $http.get('settings_example.json').success(function(data) {
//        $scope.wixSettings = data;
//    });
}]);



//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//  function($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl;
//    }
//  }]);
