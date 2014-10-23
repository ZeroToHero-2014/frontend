/**
 * Created by Andrei on 10/23/2014.
 */
hrApp.controller('EmployeesListController', ['$scope', '$http', function ($scope, $http) {
    $scope.employees = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees = data;
        });

}]);
