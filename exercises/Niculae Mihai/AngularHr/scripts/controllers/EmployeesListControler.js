
hrApp.controller('EmployeesListControler', ['$scope', '$http',
    function($scope, $http){

    $scope.employees = [];
    $scope.cauta = function(i){
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + i , method: 'GET'}).
            success(function(data, status, headers, config) {
                $scope.angajat = data;
                $scope.detalii = true;
            }).
            error(function(data, status, headers, config) {$scope.detalii = false;
            });

    }
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
           $scope.employees = data;
            console.log($scope.employees);
        }).
        error(function(data, status, headers, config) {
        });
}]);