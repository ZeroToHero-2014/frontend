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
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/demomath', {
                templateUrl: 'templates/math.html',
                controller: 'MathController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController'
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
            .when('/selectemployee', {
                templateUrl: 'templates/selectemployee.html',
                controller: 'SelectEmployeeController'
            })
            .when('/viewemployee', {
                templateUrl: 'templates/actions.html',
                controller: 'ActionsController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }])