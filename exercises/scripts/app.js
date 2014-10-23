var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
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
        .when('/employeeslist', {
            templateUrl: 'templates/employeeslist.html',
            controller: 'EmployeesListController'
        })
        .when('/singleemploy', {
            templateUrl: 'templates/singleemploy.html',
            controller: 'SingleemployController'
        })

        .when('/employeeadd', {
            templateUrl: 'templates/employeeadd.html',
            controller: 'EmployeeAddController'
        })


        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);