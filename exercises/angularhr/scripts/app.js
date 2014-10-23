var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus', {
            templateUrl: 'templates/contact.html',
            controller: 'MainController'

        })
            .when('/twowaybinding', {
                templateUrl: 'templates/scoper.html',
                controller: 'ScopesController'
            })

            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);