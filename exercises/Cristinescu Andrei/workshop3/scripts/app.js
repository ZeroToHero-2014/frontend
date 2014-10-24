/**
 * Created by Andrei on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus',{
                templateUrl: 'templates/myDescription.html',
                controller: 'DescriptionController'
        })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/demomath', {
                templateUrl: 'templates/demomath.html',
                controller: 'DemomathController'
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
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });

    }]);