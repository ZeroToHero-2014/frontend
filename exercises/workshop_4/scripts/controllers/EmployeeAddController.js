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



    $scope.reset = function () {
        this.employee = {

        };
    };




    $scope.create = function (addEmployee) {
        console.log(addEmployee);
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create', method: 'PUT',data:addEmployee}).
            success(function (data) {
                $scope.employee = data;
            });
    }
}]);