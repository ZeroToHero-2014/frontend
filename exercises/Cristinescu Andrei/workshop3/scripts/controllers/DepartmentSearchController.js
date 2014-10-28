/**
 * Created by Andrei on 10/23/2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.departments = [];
    $scope.title = "Search Department"
    $scope.eroareNull = "";
    $scope.search = function () {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/'+$scope.departament, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.departments = data;

                if(data == "null"){
                    $scope.eroareNull = "It`s not found";
                    console.log("Am intrat aici");

                }


            }).
            error(function(data, status, headers, config) {
                $scope.eroare = "The deparatament does not exist!";

            });
    };

}]);
