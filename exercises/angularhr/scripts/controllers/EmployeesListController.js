hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
        }).
        error(function(data, status, headers, config) {
        });

    $scope.visible = false;
    $scope.employeeId = "";

    $scope.info = function(id){
        $scope.visible = true;
        $scope.employeeId = id.employeeId;
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + $scope.employeeId, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.employee = data;
                $scope.visible = true;
                if(data == "null") {
                    $scope.visible = false;
                }
            })
    }
}]);