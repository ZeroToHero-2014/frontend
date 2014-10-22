/**
 * Created by Buli on 22.10.2014.
 */
var hrApp = angular.module('hrApp',['ngRoute','ngResource']);

hrApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/demomath',{
            templateUrl: 'templates/demomath.html',
            controller: 'DemoMathController'
        })
        .when('/towaybinding',{
            templateUrl:'templates/scopes.html',
            controller: 'ScopeController'
        })
        .when('/contactus',{
            templateUrl: 'templates/contactus.html',
            controller: 'ContactUsController'
        })
        .otherwise({
            templateUrl:'templates/main.html',
            controller: 'MainController'
        });
}]);