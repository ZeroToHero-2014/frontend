/**
 * Created by Bogdan on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/contactus',
        {
            templateUrl: 'templates/contactUs.html',
            controller: 'MainController'
        })
        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })
        .when('/demomath', {
            templateUrl: 'templates/demomath.html',
            controller: 'MathController'
        })
        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        })
        .when('/departmentsearch', {
            templateUrl: 'templates/departmentsearch.html',
            controller: 'DepartmentSearch'
        })
        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);