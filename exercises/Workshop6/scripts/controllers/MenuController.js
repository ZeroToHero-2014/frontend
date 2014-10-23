/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();
    $scope.employeeActionList = employeeActionsService;

    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        },
        {
            label: "Math example",
            url: "#/demopath"
        },
        {
            label: "Demo actions",
            url: "#/dropdown"
        }
    ];
}]);
/*  o fct care ne permite sa avem acces la scopul curent, la modelul de date
    in controller putem injecta obj def de noi sau definite in angular
    obj $scope create de angular...pt a fi injectat treb trecut ca param pt fct noastra
    .controller este o functie cu numele ca prim param si un array dat cu dependente
*/

