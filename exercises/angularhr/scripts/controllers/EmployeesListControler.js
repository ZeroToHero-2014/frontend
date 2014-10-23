/**
 * Created by ovy on 10/23/2014.
 */
hrApp.controller('EmployeesListControler', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];

    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).success(function(data, status, headers, config) {
        $scope.employees = data;

    }).error(function(data, status, headers, config) {
    });
    $scope.afis =function(varr){
        $scope.employe = [];

        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/'+varr, method: 'GET'}).success(function(data, status, headers, config) {
            $scope.employe = data;
            console.log(data);

        }).error(function(data, status, headers, config) {
        });
    }
}]);