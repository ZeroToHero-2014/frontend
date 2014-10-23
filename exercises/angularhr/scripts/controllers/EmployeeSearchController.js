/**
 * Created by TheBeastMaster on 23/10/2014.
 */
hrApp.controller('EmployeeSearchController', ['$scope', '$http', function
    ($scope, $http) {
    $scope.employee = {};

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/', method: 'GET'}).
        success(function (data) {
            $scope.employee = data;
        });

    $scope.reset = function () {
        this.employee = {};
    };

    $scope.create = function (addEmployee) {
        console.log(addEmployee);
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create',
            method: 'PUT',data:addEmployee}).
            success(function (data) {
                $scope.employee = data;
            });
    }
}]);