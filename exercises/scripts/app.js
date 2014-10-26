/**
 * Created by Iulia on 10/24/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
            })
            .when('/demomath', {
                templateUrl: 'templates/demomath.html',
                controller: 'DemoMathController'
            })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);