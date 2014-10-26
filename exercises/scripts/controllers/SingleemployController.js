/**
 * Created by Dsk on 10/23/2014.
 */

hrApp.controller('SingleemployController', ['$scope', '$http', function($scope, $http) {

    $scope.employeeselect = {};
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;

        })


    $scope.EmployySe = function () {
        $http({url: ' http://demo.teamnet.ro:8282/datamodel/employees/findOne/'
            + $scope.employeeselect.employeeId, method: 'GET'}).
            success(function (data) {
                $scope.oneEmploy = data;

            })


    }
}]);