/**
 * Created by iancu_000 on 23-Oct-14.
 */
hrApp.controller('DepartmentSearch', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Department Search';
    $scope.departments = "";
    $scope.firstVariable = "";
    $scope.error2 = false;
    /*$scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };*/

    $scope.search = function(){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.firstVariable, method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.department = data;
                $scope.visible = true;
                if(data == "null")
                {
                    $scope.error2 = true;
                    $scope.visible = false;
                }
                else
                {
                    $scope.error2 = false;
                }
            }).
            error(function(data, status, headers, config) {
                $scope.visible = false;
                $scope.error2 = true;
            })
    }
}]);