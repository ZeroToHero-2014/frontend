/**
 * Created by user on 10/23/2014.
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