/**
 * Created by Bogdan on 10/23/2014.
 */
/**
 * Created by Bogdan on 10/23/2014.
 */
hrApp.controller('EmployeeInfoController', ['$scope', '$http', function ($scope, $http) {
    $scope.employee = {};

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.employees = data;
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
        console.log(addEmployee);
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create', method: 'PUT',data:addEmployee}).
            success(function (data) {
                $scope.employee = data;
            });
    }
}]);