/**
 * Created by George on 10/23/2014.
 */
hrApp.controller('EmployeeSelectController', ['$scope', '$http', function ($scope, $http) {
    $scope.employees = []
    $scope.selectedEmployee = {}
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees = data;
        });

    $scope.searchEmployee = function(){
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create/findOne/' + $scope.selectedEmployee.employeeId, method: 'GET'}).
        success(function (data) {
            $scope.selectedEmployee = data;
        });
    }
}]);