/**
 * Created by Maria on 10/22/2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })

        .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })

        .when('/departmentslist', {
            templateUrl: 'templates/departmentslist.html',
            controller: 'DepartmentsListController'
        });


    }]);