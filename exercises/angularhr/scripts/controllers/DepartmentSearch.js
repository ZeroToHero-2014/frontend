/**
 * Created by ovy on 10/22/2014.
 */
hrApp.controller('DepartmentSearch', ['$scope', '$http', function($scope, $http){
    $scope.search = function(val) {

        $scope.departments = [];
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/'+val, method: 'GET'}).success(function(data, status, headers, config) {
            $scope.departments = data;



        }).error(function(data, status, headers, config) {
            $scope.x2="Eroare!!!";
        });

}

}]);