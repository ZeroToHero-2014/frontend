/**
 * Created by iancu_000 on 23-Oct-14.
 */
hrApp.controller('DepartmentSearch', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Department Search';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.departments = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.departments = data;
        }).
        error(function(data, status, headers, config) {
        });
}]);