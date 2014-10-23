hrApp.controller('EmployeeSearchController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Search Employee by Id';
    $scope.employee = "";
    $scope.employees = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees = data;
        });
    $scope.searchByEmployeeId = function()
    {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + $scope.employeeS.employeeId, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.employee = data;
            }).
            error(function (data, status, headers, config) {
                $scope.employee = "error";
            });

    }
}]);
