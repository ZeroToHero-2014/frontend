var hrApp = angular.module('hrApp',['ngRoute','ngResource'] );

hrApp.config([
        '$routeProvider', function($routeProvider){
            $routeProvider
                .when('/contactus',
                {
                templateUrl: 'templates/contact.html',
                controller: 'ContactController' }
            )

                .when('/demomath'
                ,{
                templateUrl: 'templates/demomath.html',
                controller: 'DemoMathController'
                }
            )
            .when('/twowaybinding', {
            templateUrl: 'templates/scopes.html',
            controller: 'ScopeController'
            })

            .otherwise(
            {

            templateUrl: 'templates/main.html',
            controller: 'MainController'
            }
        )}


    ]);
