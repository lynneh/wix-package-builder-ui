//'use strict';
//
///* Services */
//
//var packageBuilderServices = angular.module('packageBuilderServices', ['ngResource']);
//
//packageBuilderServices.factory('PBSettings', ['$resource',
//  function($resource){
//    return $resource('partial/images/settings_example.json', {}, {
//      query: {method:'GET', params:{queryParams:'all_settings'}, isArray:true}
//    });
//  }]);
