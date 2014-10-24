/**
 * Created by Maria on 10/24/2014.
 */

hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.employee = {};
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findAll', method: 'GET'}).
        success(function (data) {
            $scope.departments = data;
        });
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.managers = data;
        });
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/jobs/findAll', method: 'GET'}).
        success(function (data) {
            $scope.jobs = data;
        });
    /**
     * Reset form
     */
    $scope.reset = function () {
        this.employee = {};
    };
    /**
     * Persist an employee
     * @param addEmployee - employee to be persisted
     */
    $scope.create = function (addEmployee) {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create', method: 'PUT',data:addEmployee}).
            success(function (data) {
                $scope.employee = data;
                $location.url('/employeeview/'+$scope.employee.employeeId);
            });
    }
}]);
