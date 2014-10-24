/**
 * Created by Dumitru on 24.10.2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);

hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/employeeslist', {
            templateUrl: 'templates/employeelist.html',
            controller: 'EmployeeListController'
        })
            .when('/employeeadd', {
                templateUrl: 'templates/employeeadd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'templates/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .when('/employeeedit/:employeeid', {
                templateUrl: 'templates/employeeedit.html',
                controller: 'EmployeeEditController'
            })
            .when('/employeedelete/:employeeid', {
                templateUrl: 'templates/employeedelete.html',
                controller: 'EmployeeDeleteController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);