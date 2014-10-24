hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
        });
}]);