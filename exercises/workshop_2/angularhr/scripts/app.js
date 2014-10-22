var hrApp= angular.module('hrApp',['ngRoute','ngResource']);

hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopesController'
        })
        .when('/contactus',{
            templateUrl:'templates/contactus.html',
            controller:'ContactUsController'
        })

        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);