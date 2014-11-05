var hrApp=angular.module('hrApp',['ngRoute','ngResource']);
hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider

        .when('/contactus', {
            templateUrl: 'templates/contactus.html',
            controller: 'ContactUsController'
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

        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })

        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        })

        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);
