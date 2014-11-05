var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);

hrApp.config(['$routeProvider',function($routeProvider) {
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

        .when('/departmentsearch', {
            templateUrl: 'templates/departmentsearch.html',
            controller: 'DepartmentSearchController'
        })

        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        })

        .when('/contactus',{
            templateUrl: 'templates/contactus.html',
            controller: 'ContactUsController'
        })

        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })

        .when('/demomath', {
            templateUrl: 'templates/math.html',
            controller: 'MathController'
        })

        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);
