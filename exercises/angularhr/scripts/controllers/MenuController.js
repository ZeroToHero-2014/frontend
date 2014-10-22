/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();
}]);
/*  o fct care ne permite sa avem acces la scopul curent, la modelul de date
    in controller putem injecta obj def de noi sau definite in angular
    obj $scope create de angular...pt a fi injectat treb trecut ca param pt fct noastra
    .controller este o functie cu numele ca prim param si un array dat cu dependente
*/