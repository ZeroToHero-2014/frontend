/**
 * Created by Juvie on 23.10.2014.
 */
hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.afisare = true;
    $scope.employees = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}). success(function(data, status, headers, config) {
        $scope.employees = data;
    }).
        error(function(data, status, headers, config) {
        });

    $scope.showInfo = function(varid) {
        $scope.afisare = false;
        var temp;
        temp = 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' +varid +'/';
        $http({url: temp, method: 'GET'}). success(function(data, status, headers, config) {
            $scope.employee = data;
        }).
            error(function(data, status, headers, config) {
            });


            }

}]);