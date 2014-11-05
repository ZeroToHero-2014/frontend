hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){

    $scope.ok=false;
    $scope.gasit=false;
    $scope.search = function(id) {
    $scope.ok=true;
        $scope.department = $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/'+id, method: 'GET'}).
                success(function(data, status, headers, config) {
                    $scope.department = data;
                    $scope.gasit=true;

                }).
                error(function(data, status, headers, config) {

                $scope.gasit=false;
                });


    };

}]);
