/**
 * Created by Dumitru on 23.10.2014.
 */
hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $scope.ptButon = [];
    $scope.myValue = false;

    //get details and show <div> with details
    $scope.getEmployeeDetails = function(value) {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/'+value, method: 'GET'})
            .success(function(data, status, headers, config) {
                $scope.ptButon = data;
            })
            .error(function(data, status, headers, config) {
            });
        if($scope.myValue == false) {
            $scope.myValue = true;
        }
    };

    //hide <div>
    $scope.hideDetails = function() {
        if($scope.myValue == true) {
            $scope.myValue = false;
        }
    }

    //get data from server
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'})
        .success(function(data, status, headers, config) {
            $scope.employees = data;
        })
        .error(function(data, status, headers, config) {
        });
}]);