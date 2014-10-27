hrApp.controller('SelectEmployeeController ', ['$scope', '$http', function($scope, $http){
    $scope.employee = [];
    $http({url:'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'})
        .success(function(data, status, headers, config) {
        $scope.employee = data;
    }).
        error(function(data, status, headers, config) {
        });
}]);