/**
 * Created by Maria on 10/24/2014.
 */

hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
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
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/'+$routeParams.employeeid, method: 'GET'}).
        success(function (data) {
            $scope.employee = data;
        });
    /**
     * Reset form
     */
    $scope.reset = function () {
        $scope.employee = {};
    };
    /**
     * Persist an employee
     * @param addEmployee - employee to be persisted
     */
    $scope.create = function (addEmployee) {
        console.log(addEmployee);
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/edit', method: 'POST',data:addEmployee}).
            success(function (data) {
                $scope.employee = data;
                $location.url('/employeeview/'+$scope.employee.employeeId);
            });
    }
}]);
