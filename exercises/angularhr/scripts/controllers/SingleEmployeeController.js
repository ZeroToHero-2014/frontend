hrApp.controller('SingleEmployeeController', ['$scope', '$http', function ($scope, $http) {
    $scope.employee = {};

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees = data;
        });



}]);