hrApp.controller('EmployeeViewController', ['$scope', '$http', function ($scope, $http) {



    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees= data;
        });


}]);