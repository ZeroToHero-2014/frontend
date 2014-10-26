/**
 * Created by Iulia on 10/25/2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.department = {};

    $scope.search = function(ID) {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/{ID}', method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.department = data;

                if (data != "null") {
                    $scope.res = "Operation ended with Success!";
                }
                else
                    $scope.res = "Invalid ID. Please insert another id!";
            }).
            error(function (data, status, headers, config) {
            });
    }
}]);
