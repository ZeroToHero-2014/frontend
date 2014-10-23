/**
 * Created by Buli on 23.10.2014.
 */
hrApp.controller('ViewEmployeeController',['$scope', '$http', function($scope, $http){

    $scope.employee = {};
    $scope.employeeID = "";
    $http({
        url:'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method:'GET'
    }).
        success(function(data){
            $scope.employees = data;
        }).
        error(function(data){

        });

    $scope.request = function() {
        $http({
            url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + $scope.employee.employeeId, method: 'GET'
        }).
            success(function (data) {
                $scope.viewEmployee = data;
            }).
            error(function (data) {
                console.log("Error");
            });
    }
}]);