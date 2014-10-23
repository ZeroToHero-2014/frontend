hrApp.controller('EmployeeAddController', ['$scope', '$http', function ($scope, $http) {
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
        console.log(addEmployee);
        $http({url: 'http://demo.teamnet.ro:8282/datamodasdasdel/employees/create', method: 'PUT', data: addEmployee}).
            success(function (data) {
                $scope.employee = data;
            }).
            error(function (data, status, headers, config) {
                $('#divmodal').modal();
                $scope.mesaj = "mesaj de eroare:" + status;
            });
    }
}]);
