/**
 * Created by ovy on 10/24/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/employeeslist', {
            templateUrl: 'templates/Employeelist.html',
            controller: 'EmployeeListController'
        })
        .when('/employeeadd', {
            templateUrl: 'templates/Employeadd.html',
            controller: 'EmployeeAddController'
        })
        .when('/employeeview/:employeeid', {
            templateUrl: 'templates/Employeeview.html',
            controller: 'EmployeeViewController'
        })
        .when('/employeeedit/:employeeid', {
            templateUrl: 'templates/Employeeedit.html',
            controller: 'EmployeeEditController'
        })
        .when('/employeedelete/:employeeid', {
            templateUrl: 'templates/Employeedelete.html',
            controller: 'EmployeeDeleteController'
        })
        .otherwise({
            templateUrl: 'templates/Main.html',
            controller: 'MainController'
        });
}]);
