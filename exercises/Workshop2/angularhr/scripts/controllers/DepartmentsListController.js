/**
 * Created by iancu_000 on 23-Oct-14.
 */
hrApp.controller('DepartmentsListController', ['$scope', '$http', function($scope, $http){
    $scope.departments = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.departments = data;
        }).
        error(function(data, status, headers, config) {
        });
}]);