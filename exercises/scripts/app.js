var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/contactus', {
            templateUrl: 'templates/contactus.html',
            controller:'Contactus'
        })
        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })
        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        })
        .when('/dropdown', {
            templateUrl: 'templates/dropdown.html',
            controller: 'DropdownController'
        })
        .when('/demomath', {
            templateUrl: 'templates/demomath.html',
            controller: 'DemomathController'
        })
        .when('/employeeslist', {
            templateUrl: 'templates/employeeslist.html',
            controller: 'EmployeeListController'
        })
        .when('/singleemploy', {
            templateUrl: 'templates/singleemploy.html',
            controller: 'SingleemployController'
        })

        .when('/employeeadd', {
            templateUrl: 'templates/employeeadd.html',
            controller: 'EmployeeAddController'
        })

        .when('/departmentsearch', {
            templateUrl: 'templates/departmentsearch.html',
            controller: 'DepartmentSearchController'
        })
        .when('/actions/:employeeid', {
            templateUrl: 'templates/actions.html',
            controller: 'actions'
        })
        .when('/employeeview/:employeeid', {
            templateUrl: 'templates/employeeview.html',
            controller: 'EmployeeViewController'
        })
        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);