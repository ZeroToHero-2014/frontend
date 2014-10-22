/**
 * Created by Juvie on 22.10.2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contact',{
                templateUrl: 'templates/contactus.html',
                controller: 'ContactController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);
