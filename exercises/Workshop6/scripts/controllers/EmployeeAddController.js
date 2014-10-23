/**
 * Created by Dumitru on 23.10.2014.
 */
hrApp.controller('EmployeeAddController', ['$scope', '$http', function ($scope, $http) {
    $scope.employee = {};
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findAll', method: 'GET'}).
        success(function (data) {
            $scope.departments = data;
        });
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll', method: 'GET'}).
        success(function (data) {
            $scope.managers = data;
        });
    $http({url: 'http://demo.teamnet.ro:8282/datamodel/jobs/findAll', method: 'GET'}).
        success(function (data) {
            $scope.jobs = data;
        });

    //variable to show/hide the error
    $scope.errorValue = false;
    /**
     * Reset form
     */
    $scope.reset = function () {
        this.employee = {};

        //hide the error
        if($scope.errorValue == true) {
         $scope.errorValue = false;
         }
    };
    /**
     * Persist an employee
     * @param addEmployee - employee to be persisted
     */
    $scope.create = function (addEmployee) {
        console.log(addEmployee);

        $http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create', method: 'PUT',data:addEmployee})
            .success(function (data) {
                $scope.employee = data;
            })
            .error(function (data) {
                $scope.error = "The command hasn't been execute, please try again!";

                //show the error
                if($scope.errorValue == false) {
                    $scope.errorValue = true;
                }
            });
    }
}]);