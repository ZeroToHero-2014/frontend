var hrApp = angular.module('hrApp',['ngRoute','ngResource'] );

hrApp.config([
        '$routeProvider', function($routeProvider){
            $routeProvider
                .when('/singleemploye',{
                    templateUrl: 'templates/singleemploy.html',
                    controller: 'SingleEmployeeController'
                })
                .when('/employeeadd', {
                    templateUrl: 'templates/employeeadd.html',
                    controller: 'EmployeeAddController'
                })
                .when('/dropdown', {
                    templateUrl: 'templates/dropdown.html',
                    controller: 'DropdownController'
                })
                .when('/employeeslist', {
                    templateUrl: 'templates/employeeslist.html',
                    controller: 'EmployeesListControler'
                })
                .when('/contactus',
                {
                templateUrl: 'templates/contact.html',
                controller: 'ContactController' }
            )
                .when('/departmentslist', {
                    templateUrl: 'templates/departmentslist.html',
                    controller: 'DepartmentsListController'
                })
                .when(
                '/departmentsearch',
        {
                templateUrl:'templates/departmentsearch.html',
                controller: 'DepartmentSearchController'
        }
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
