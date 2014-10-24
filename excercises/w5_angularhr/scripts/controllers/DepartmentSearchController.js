/**
 * Created by Anca on 23.10.2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope','$http', function($scope, $http){
     $scope.title = 'Department Search';

    $scope.searchUserById = function(value) {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/'+ value, method: 'GET'})
            .success(function(data, status, headers, config) {
                $scope.departments = data;
            })
            .error(function(data, status, headers, config) {
                $scope.errMsg = 'Department not found.  ';
            });
    };

}]);
