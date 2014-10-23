var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus',{
                templateUrl:'templates/contactus.html',
                controller: 'ContactController'
            })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/dropdown', {
                templateUrl: 'templates/dropdown.html',
                controller: 'DropdownController'
            })
            .when('/demomath',{
                templateUrl: 'templates/demomath.html',
                controller: 'DemomathController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/employeeslist', {
            templateUrl: 'templates/employeeslist.html',
            controller: 'EmployeesListController'
            })
            .when('/employeeadd', {
                templateUrl: 'templates/addemployee.html',
                controller: 'EmployeeAddController'
            })

            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);