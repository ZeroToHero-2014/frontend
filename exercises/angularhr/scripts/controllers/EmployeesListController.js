/**
 * Created by TheBeastMaster on 23/10/2014.
 */
hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];

    $scope.show=false;

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll/', method: 'GET'})
        .success(function (data, status, headers, config) {
            $scope.employees = data;
        })
        .error(function (data, status, headers, config) {
        });

    $scope.action = function(employee) {console.log(employee)
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' +employee.employeeId, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employee = data;
                $scope.show = true;
            })
            .error(function (data, status, headers, config) {
            });
    }
}]);