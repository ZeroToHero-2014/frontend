/**
 * Created by TheBeastMaster on 23/10/2014.
 */
hrApp.controller('EmployeesListController', ['$scope', '$http', function($scope, $http){
    $scope.employees = [];

    $scope.show=false;


    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'})
        .success(function(data, status, headers, config) {
            $scope.employees = data;
        })
        .error(function(data, status, headers, config) {
        });

        $scope.action = function(employee) {
        $scope.id=employee.employeeId;
        $scope.firstName=employee.firstName;
        $scope.lastName=employee.lastName;
        $scope.salary=employee.salary;
        $scope.departmentName=employee.departmentId.departmentName;
        $scope.email=employee.email;
        $scope.phone=employee.phoneNumber;
        $scope.city=employee.departmentId.locationId.city;
        $scope.show=true;
   }
}]);