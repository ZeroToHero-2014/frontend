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
        .when('/dropdown', {
            templateUrl: 'templates/dropdown.html',
            controller: 'DropdownController'
        })
        .when('/employeeslist', {
            templateUrl: 'templates/employeeslist.html',
            controller: 'EmployeesListController'
        })
        .when('/employeeadd', {
            templateUrl: 'templates/employeeadd.html',
            controller: 'EmployeeAddController'
        })
        .when('/employeeInfo', {
            templateUrl: 'templates/employeeInfo.html',
            controller: 'EmployeeInfoController'
        })
        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);