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

            .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        })

    }]);
