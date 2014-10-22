/**
 * Created by user on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus',{
                templateUrl: 'templates/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);
