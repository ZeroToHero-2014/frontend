/**
 * Created by Dsk on 10/24/2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.department={};

    $scope.search = function(IDdep){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.IDdep, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.department = data;
                if (data != "null") {
                    $scope.res = "Operation end with Succes!";


                }
                else
                    $scope.res = "ID invalid.Please change id!";


            }).
            error(function(data, status, headers, config) {
            });
    }
}]);