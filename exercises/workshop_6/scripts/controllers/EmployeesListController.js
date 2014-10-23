hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){

    $scope.employees=[];
    $scope.aux=false;
    $scope.no=true;
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function(data, status, headers, config) {
            $scope.employees = data;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
        });

    $scope.moreInfo = function (emp) {
        $http({url: ' http://demo.teamnet.ro:8282/datamodel/employees/findOne/' + emp.employeeId, method: 'GET'}).



            success(function (data) {
                $scope.selectedEmployee = data;
                $scope.aux=true;

            }).
            error(function (data) {
                console.log(data);
                $scope.no=false;

            })
    }

    }]);