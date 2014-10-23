hrApp.controller('DepartmentsSearchController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Search Department by Id';
    $scope.department = "";
    $scope.searchByDepartmentId = function()
    {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.departmentId, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.department = data;
            }).
            error(function (data, status, headers, config) {
                $scope.department = "wrong department id";
            });
    }
}]);