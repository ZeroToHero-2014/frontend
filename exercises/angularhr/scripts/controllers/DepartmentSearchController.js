hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.departments = [];
    $scope.title = 'Department Search';
    $scope.show=false;
    $scope.show1=false;
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.departments = data;
        }).
        error(function(data, status, headers, config) {
        });







    $scope.search = function() {
    var aux=0;
        for (department in $scope.departments) {
            if ($scope.depID == $scope.departments[department].departmentId) {
                $scope.departmentId = $scope.departments[department].departmentId;
                $scope.departmentName = $scope.departments[department].departmentName;
                $scope.city = $scope.departments[department].locationId.city;
                aux=1;
            }

        }
       if(aux==1) {$scope.show=true; $scope.show1=false;}
            else if(aux==0) {$scope.show1=true; $scope.show=false;}
    }
}]);