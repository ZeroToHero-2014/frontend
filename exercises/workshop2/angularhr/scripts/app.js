var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/employeesearch', {
                templateUrl: 'templates/employeesearch.html',
                controller: 'EmployeeSearchController'
            })
            .when('/employeeadd', {
                templateUrl: 'templates/employeeadd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeeslist', {
                templateUrl: 'templates/employeeslist.html',
                controller: 'EmployeesListController'
            })
            .when('/dropdown', {
                templateUrl: 'templates/dropdown.html',
                controller: 'DropdownController'
            })
            .when('/departmentssearch', {
                templateUrl: 'templates/departmentssearch.html',
                controller: 'DepartmentsSearchController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when ('/demomath', {
                templateUrl:"templates/demomath.html",
                controller: 'DemomathController'
        })
            .when ('/contactus', {
            templateUrl:"templates/contact.html",
            controller: 'ContactController'
        })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);