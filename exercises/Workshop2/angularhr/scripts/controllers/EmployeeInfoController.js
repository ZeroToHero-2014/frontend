/**
 * Created by Bogdan on 10/23/2014.
 */

hrApp.controller('EmployeeInfoController', ['$scope', '$http', function ($scope, $http) {
    $scope.employee = {};

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees = data;
        });



}]);