/**
 * Created by George on 10/23/2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.department='';

    $scope.search = function(){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.inputValue, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.department = data;
                if (data == "null")
                    $scope.result = "ID not found. Error!";
                else
                    $scope.result = "Success!";

                    }).
                error(function(data, status, headers, config) {
                });
    }
}]);

