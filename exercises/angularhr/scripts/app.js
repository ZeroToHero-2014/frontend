/**
 * Created by user on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus',{
                templateUrl: 'templates/contact.html',
                controller: 'ContactController'
            })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/demomath', {
                templateUrl: 'templates/demomath.html',
                controller: 'ScopesController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
            })
            .when('/dropdown', {
                templateUrl: 'templates/dropdown.html',
                controller: 'DropDownController'
            })
            .when('/employeeslist', {
                templateUrl: 'templates/employeeslist.html',
                controller: 'EmployeesListController'
            })
            .when('/employeeadd', {
                templateUrl: 'templates/employeeadd.html',
                controller: 'EmployeeAddController'
            })
            .when('/singleEmployee', {
                templateUrl: 'templates/singleEmployee.html',
                controller: 'EmployeesListController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);
