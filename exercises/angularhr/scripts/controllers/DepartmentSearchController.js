hrApp.controller('DepartmentSearchController', ['$scope', function($scope) {
    $scope.title = 'Department Search';
    $scope.descriptionShow = false;
    $scope.search = function() {
        for (var department in departments)
        if ($scope.depID==department.departmentId) {
            answer.departmentId = department.departmentId;
            answer.departmentName = department.departmentName;
            answer.locationId.city = department.locationId.city;
        }
    }
}]);