/**
 * Created by George on 10/22/2014.
 */
hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, param1){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        },
        {
            label: "Demo Math",
            url: "#/demomath"
        }
    ];

    $scope.departmentActionList = [
        {
            label: "Departments List",
            url: "#/departmentslist"
        },
        {
            label: "Department Search",
            url: "#/departmentsearch"
        }
    ];

    $scope.employeeActionList = param1;
}]);

