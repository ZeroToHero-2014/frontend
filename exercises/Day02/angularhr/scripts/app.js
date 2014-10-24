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
            templateUrl:'templates/demoMath.html',
            controller: 'DemoMathController'
        })

        .when('/departmentslist', {
            templateUrl: 'templates/departmentsList.html',
            controller: 'DepartmentsListController'
        })

        .when('/departmentsearch', {
            templateUrl: 'templates/departmentSearch.html',
            controller: 'DepartmentSearchController'
        })

        .when('/dropdown', {
            templateUrl: 'templates/dropdown.html',
            controller: 'DropdownController'
        })

        .when('/employeeslist', {
            templateUrl: 'templates/employeesList.html',
            controller: 'EmployeesListController'
        })

        .when('/employeeadd', {
            templateUrl: 'templates/employeeAdd.html',
            controller: 'EmployeeAddController'
        })

        .when('/employeesearch', {
            templateUrl: 'templates/employeeSearch.html',
            controller: 'EmployeeSearchController'
        })

        .when('/employeeselect', {
            templateUrl: 'templates/employeeSelect.html',
            controller: 'EmployeeSelectController'
        })

        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);