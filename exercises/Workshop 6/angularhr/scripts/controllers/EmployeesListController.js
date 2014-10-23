hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];
    $scope.details =[];
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
           // console.log(data);
        }).
        error(function(data, status, headers, config) {
        });

    $scope.cauta = function(idangajat) {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/'+idangajat , method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.details = data;
                // console.log(data);
            }).
            error(function (data, status, headers, config) {
            });
    }


}]);