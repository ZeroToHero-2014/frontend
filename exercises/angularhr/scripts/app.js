/**
 * Created by ovy on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/contactus',{
            templateUrl: 'templates/contact.html',
            controller: 'Contact'
        })
        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })

        .when('/demomath', {
            templateUrl: 'templates/demomath.html',
            controller: 'DemoMath'
        })
        .when('/departmentslist', {
            templateUrl: 'templates/departmnetslist.html',
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
            controller: 'EmployeesListControler'
        })
        .when('/addemployee', {
            templateUrl: 'templates/employeeadd.html',
            controller: 'EmployeeAddController'
        })
        .when('/employee', {
            templateUrl: 'templates/employee.html',
            controller: 'Employee'
        })

        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);
