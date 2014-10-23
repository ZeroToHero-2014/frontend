/**
 * Created by Buli on 23.10.2014.
 */
hrApp.controller('EmployeesListController',['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $scope.visible = false;
    $http({
        url:'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method:'GET'
    }).
        success(function(data,status,headers,config){
            $scope.employees = data;
        }).
        error(function(data,status,headers,config){

        });

    $scope.actionTrigger = function(searchId){
        $scope.visible = true;
        $http({
            url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + searchId.employeeId, method: 'GET'
        }).
            success(function(data){
                $scope.selectedEmployee = data;
            }).
            error(function(data){

            });
    }
}]);