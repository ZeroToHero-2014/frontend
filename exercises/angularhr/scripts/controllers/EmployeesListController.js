hrApp.controller('EmployeesListController', ['$scope', '$http','$location', function($scope, $http,$location){
    $scope.employees = [];
    $http({url:'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'})
        .success(function(data, status, headers, config) {
        $scope.employees = data;
    }).
        error(function(data, status, headers, config) {
        });
            $scope.viewEmployee = function(employeeId) {
                $location.url('/employeeview/'+employeeId);
            };
}]);
