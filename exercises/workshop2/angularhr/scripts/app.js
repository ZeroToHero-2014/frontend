var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
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