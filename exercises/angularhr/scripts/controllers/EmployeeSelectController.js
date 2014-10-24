/**
 * Created by Juvie on 23.10.2014.
 */
hrApp.controller('EmployeeSelectController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}). success(function(data, status, headers, config) {
        $scope.employees = data;
    }).
        error(function(data, status, headers, config) {
        });
}]);