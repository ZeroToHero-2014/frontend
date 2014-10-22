/**
 * Created by Anca on 22.10.2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus', {/*tot ce e trecut in url dupa # nu ajunge la server*/
                templateUrl: 'templates/something.html',
                controller: 'FirstController'
            })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/demomath', {
                templateUrl: 'templates/math.html',
                controller: 'MathController'
            })
            .otherwise({/* intra pe orice ruta daca nu gaseste una definita, stabileste ruta default */
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);