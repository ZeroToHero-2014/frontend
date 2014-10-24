/**
 * Created by George on 10/23/2014.
 */
hrApp.controller('EmployeeSearchController', ['$scope', '$http', function($scope, $http){
    $scope.employee='';

    $scope.search = function(){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + $scope.inputValue, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.employee = data;
            }).
            error(function(data, status, headers, config) {
            });
    }
}]);