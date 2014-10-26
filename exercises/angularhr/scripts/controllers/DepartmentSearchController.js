/**
 * Created by user on 10/26/2014.
 */
hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.departments = [];
    $scope.departmentId = "";
    $scope.eroare=false;

    $scope.search=function() {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.departmentId, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.departments = data;
                $scope.visible=true;
                $scope.eroare=false;
                if(data=="null"){
                    $scope.eroare=true;
                    $scope.visible=false;
                }
            }).
            error(function (data, status, headers, config) {

                $scope.eroare = true;
            });
    }
}]);