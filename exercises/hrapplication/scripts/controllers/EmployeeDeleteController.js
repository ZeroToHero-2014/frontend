hrApp.controller('EmployeeDeleteController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
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
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + $routeParams.employeeid, method: 'GET'}).
        success(function (data) {
            $scope.employee = data;
        });
    $scope.deleteEmployee = function () {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/delete/' + $routeParams.employeeid, method: 'DELETE'}).
            success(function (data) {
                $location.url('/employeeslist');
            });
    }
}]);