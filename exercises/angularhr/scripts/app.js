var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);


hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus',{
                templateUrl: 'templates/contactus.html',
                controller:  'ContactUsController'
            })

            .otherwise({
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);
