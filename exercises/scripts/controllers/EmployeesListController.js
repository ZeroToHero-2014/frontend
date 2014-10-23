/**
 * Created by Dsk on 10/23/2014.
 */

hrApp.controller('EmployeesListController', ['$scope', '$http', function
    ($scope, $http) {
    $scope.employee = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll',
        method: 'GET'}).
        success(function (data) {
            $scope.employee = data;
        });
}]);