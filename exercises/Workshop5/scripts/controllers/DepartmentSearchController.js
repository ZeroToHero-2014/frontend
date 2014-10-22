/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Search department!';
    $scope.makeRequest = function() {
        $scope.rezultat = [];
        $http = ({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/{inputvalue}', method: GET}).
            success(function(data, status, headers, config) {
                $scope.departments = data;
            }).
            error(function(data, status, headers, config) {
            });
    };
}]);