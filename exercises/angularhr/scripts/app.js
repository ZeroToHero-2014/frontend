var hrApp = angular.module('hrApp', ['ngRoute', 'ngResource']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider /*cu acest obiect se face configurarea rutei*/
            .when('/singleemployee',{  /*ne definim o noua ruta*/
                templateUrl: 'templates/singleemployee.html',
                controller: 'SingleEmployeeController'
            })
            .when('/contactus',{  /*ne definim o noua ruta*/
                templateUrl: 'templates/contactus.html',
                controller: 'ContactusController'
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
            .when('/demomath',{  /*ne definim o noua ruta*/
                templateUrl: 'templates/demomath.html',
                controller: 'DemomathController'
            })
            .when('/twowaybinding', {
                templateUrl: 'templates/scopes.html',
                controller: 'ScopesController'
            })
            .when('/departmentslist', {
                templateUrl: 'templates/departmentslist.html',
                controller: 'DepartmentsListController'
            })
            .when('/departmentsearch', {
                templateUrl: 'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
            })
            .otherwise({ /*cand nu este definita o ruta, vine pe ruta asta*/
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            });
    }]);

/* scopul=obiecte in care ne tinem modelul nostru de date; din MVW, e modelul, htmlurile sin Viewul */