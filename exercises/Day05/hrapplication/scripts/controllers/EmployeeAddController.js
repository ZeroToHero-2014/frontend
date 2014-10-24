/**
 * Created by George on 10/24/2014.
 */
hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
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
    /**
     * Reset form
     */
    $scope.reset = function () {
        this.employee = {};
    };
    /**
     * Persist an employee
     * @param addEmployee - employee to be persisted
     */
    $scope.create = function (addEmployee) {$http({url: 'http://demo.teamnet.ro:8282/datamodel/employees/create', method: 'PUT',data:addEmployee}).
        success(function (data) {
            $scope.employee = data;
            $location.url('/employeeview/'+$scope.employee.employeeId);
        });
    }


    /**
     * Check if a field of form is properly
     * @param form - the field (ex: myForm.name)
     * @returns {boolean}
     */
    $scope.myDirty = function(form)
    {
        if(form.$dirty && form.$invalid){
            return true;
        }
        return false;
    }

    /**
     * check if all fields of form are properly
     * @param form - the field(ex: myForm)
     * @returns {boolean}
     */
    $scope.anyDirtyAndInvalid = function (form){
        for(var prop in form) {
            if(form.hasOwnProperty(prop)) {
                if(form[prop].$dirty && form[prop].$invalid) {
                    return true;
                }
            }
        }
        return false;
    };
}]);