var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/employeeslist', {
                templateUrl: 'templates/Employeeslist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeadd', {
                templateUrl: 'templates/Employeeadd.html',
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