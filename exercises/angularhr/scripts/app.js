/**
 * Created by andre_000 on 22.10.2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);

hrApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .otherwise({
            templateUrl: 'templates/main.html',
            controller: 'MainController'
        });
}]);
