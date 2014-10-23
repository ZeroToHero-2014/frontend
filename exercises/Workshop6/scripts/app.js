/**
 * Created by Dumitru on 22.10.2014.
 */
var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);

hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/contactus', {    //intra pe orice ruta, daca nu gaseste vreuna definita
                templateUrl: 'templates/contact.html', //va fi incarcat in ng-view
                controller: 'ContactController'
            })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/demopath', {
                templateUrl: 'templates/demopath.html',
                controller: 'DemopathController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
            })
            .when('/dropdown', {
                templateUrl: 'templates/dropdown.html',
                controller: 'DropdownController'
            })
            .when('/employeeslist', {
                templateUrl: 'templates/employeeslist.html',
                controller: 'EmployeesListController'
            })
            .when('/employeeadd', {
                templateUrl: 'templates/employeeadd.html',
                controller: 'EmployeeAddController'
            })
            .when('/employeesee', {
                templateUrl: 'templates/employeesee.html',
                controller: 'EmployeeSeeController'
            })
            .otherwise({    //intra pe orice ruta, daca nu gaseste vreuna definita
                templateUrl: 'templates/main.html', //va fi incarcat in ng-view
                controller: 'MainController'
            });
    }]);
/*  hrApp este o variabila globala, care va stoca modulul aplicatiei
    in el am injectat alte 2 module de angular
    configura si ruta default:
        injectam obj routeProvider[ne da pos sa conf url app]
        folosim metoda otherwise[stab ruta default] -> prim un obj si fct cu care manipulam scopul

*/