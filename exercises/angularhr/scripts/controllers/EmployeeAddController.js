/**
 * Created by Buli on 23.10.2014.
 */
hrApp.controller('EmployeeAddController', ['$scope', '$http', function($scope, $http){
    $scope.employee = {};
    $scope.error = false;

    $http({
        url: 'http://demo.teamnet.ro:8282/datamodel/departments/findAll', method: 'GET'
    }).
        success(function(data){
            $scope.departments = data;
        }).
        error(function(data){

        });

    $http({
        url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'
    }).
        success(function(data){
            $scope.managers = data;
        }).
        error(function(data){

        });

    $http({
        url: 'http://demo.teamnet.ro:8282/datamodel/jobs/findAll', method: 'GET'
    }).
        success(function(data){
            $scope.jobs = data;
        });

    $scope.create = function(addEmployee){
        console.log(addEmployee);
        $http({
            url: 'http://demo.teamnet.ro:8282/datamodel/employees/create', method: 'PUT', data:addEmployee
        }).
            success(function(data){
                $scope.employee = data;
                $scope.error = false;
            }).
            error(function(data){
                $scope.error = true;
            })
    }

    $scope.reset = function(){
        this.employee = {};
    }

}]);