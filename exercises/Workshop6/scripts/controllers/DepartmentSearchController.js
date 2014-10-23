/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Search department!';
    $scope.makeRequest = function(value) {
        $scope.rezultat = [];
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/'+value, method: 'GET'}).
            success(function(data, status, headers, config) {
                if(data != "null") {
                    $scope.rezultat = data;
                } else {
                    $scope.eroare = "NU exista valoarea!";
                }
            }).
            error(function(data, status, headers, config) {
                $scope.eroare = "Eroare interna!";
            });
    };
}]);