hrApp.controller('EmployeeOneController', ['$scope', '$http', function($scope, $http) {
    $scope.selectedemployees = {};
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
            console.log(data);

        }).
        error(function(data, status, headers, config) {
        });

    $scope.getID = function () {
        $http({url: ' http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + $scope.selectedemployees.employeeId, method: 'GET'}).

            success(function (data) {
                $scope.oneEmp = data;

            }).
            error(function (data) {
                console.log(data);

            })

    }
}]);