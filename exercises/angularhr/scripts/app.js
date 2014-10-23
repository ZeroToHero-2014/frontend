/**
 * Created by Buli on 22.10.2014.
 */
var hrApp = angular.module('hrApp',['ngRoute','ngResource']);

hrApp.config(['$routeProvider',function($routeProvider){
    $routeProvider

        .when('/viewemployee', {
            templateUrl: 'templates/viewemployee.html',
            controller: 'ViewEmployeeController'
        })
        .when('/employeeadd', {
            templateUrl: 'templates/employeeadd.html',
            controller: 'EmployeeAddController'
        })
        .when('/employeeslist',{
            templateUrl: 'templates/employeeslist.html',
            controller: 'EmployeesListController'
        })
        .when('/dropdown', {
            templateUrl: 'templates/dropdown.html',
            controller: 'DropdownController'
        })
        .when('/departmentsearch',{
        templateUrl: 'templates/departmentsearch.html',
            controller: 'DepartmentSearchController'
        })
        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        })
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