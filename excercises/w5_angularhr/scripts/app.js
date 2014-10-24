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
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentSearch.html',
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
            .otherwise({/* intra pe orice ruta daca nu gaseste una definita, stabileste ruta default */
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);