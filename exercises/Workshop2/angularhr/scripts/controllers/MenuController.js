/**
 * Created by Bogdan on 10/22/2014.
 */
hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        },
        {
            label: "Demo Math",
            url: "#/demomath"
        },
        {
            label: "Dropdown",
            url: "#/dropdown"
        }
    ];
    $scope.emplyeesList = employeeActionsService;
}]);
