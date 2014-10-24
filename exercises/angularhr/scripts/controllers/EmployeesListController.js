hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $scope.show=false;
    $scope.show1=false;

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
        }).
        error(function(data, status, headers, config) {
        });

    $scope.action = function(employee) {

        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + employee.employeeId, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.employee = data;
                $scope.show=true;
            }).
            error(function(data, status, headers, config) {
                $scope.show1=true;
            });

    }
}]);