var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus', {
                templateUrl : 'templates/contact.html',
                controller  : 'ContactController'
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

            .when('/employeeadd', {
                templateUrl: 'templates/employeeadd.html',
                controller: 'EmployeeAddController'
            })

            .when('/singleemployee', {
                templateUrl: 'templates/singleemployee.html',
                controller: 'SingleEmployeeController'
            })

            .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        })

    }]);
