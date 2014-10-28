/**
 * Created by George on 10/23/2014.
 */
hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $scope.showInfo=false;

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
        }).
        error(function(data, status, headers, config) {

        });

    $scope.viewInformation = function(emp){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + emp.employeeId, method: 'GET'}).
            success(function (data) {
                $scope.employee = data;
                $scope.showInfo = true;
            }).
            error(function(data, status, headers, config) {
                $scope.showInfo = false;
            });
    }
}]);