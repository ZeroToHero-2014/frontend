/**
 * Created by George on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/contact',{
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })

        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })

        .when('/demomath', {
            templateUrl:'templates/demo.html',
            controller: 'DemoMathController'
        })

        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        })

        .when('/departmentsearch', {
            templateUrl: 'templates/searchdepartment.html',
            controller: 'DepartmentSearchController'
        })

        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);