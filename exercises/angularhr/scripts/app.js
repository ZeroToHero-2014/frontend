var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);


hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus',{
                templateUrl: 'templates/contactus.html',
                controller:  'ContactUsController'
            })
            .when('/twowaybinding', {
                 templateUrl: 'templates/scopes.html',
                 controller: 'ScopesController'
            })
            .when('/demomath', {
                templateUrl: 'templates/math.html',
                controller: 'MathController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
            })
            .when('/dropdown', {
                templateUrl: 'templates/dropdown.html',
                controller: 'DropdownController'
            })
            .when('/employeeslist', {
                templateUrl: 'templates/employeeslist.html',
                controller: 'EmployeesListController'
            })
            .when('/dropdown', {
                templateUrl: 'templates/dropdown.html',
                controller: 'DropdownController'
            })

            .when('/employeeadd', {
                templateUrl: 'templates/employeeadd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeeview', {
                templateUrl: 'templates/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);
