/**
 * Created by TheBeastMaster on 22/10/2014.
 */
hrApp.controller('DepartmentSearchController',['$scope','$http',function($scope,$http){
    $scope.title = "Department Search";
    $scope.departments = "";
    $scope.inputValue = "";
    $scope.error2 = false;

    $scope.search = function(){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.inputValue, method: 'GET'}).
            success(function(data, status, headers, config){
                $scope.departments = data;
                $scope.visible = true;
                if(data == "null")
                {
                    $scope.error2 = true;
                    $scope.visible = false;
                }
                else
                    $scope.error2 = false;
            }).
            error(function(data, status, headers, config){
                $scope.visible = false;
                $scope.error2 = true;
            })
    }

}]);