/**
 * Created by Andrei on 10/22/2014.
 */
hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope,employeeActionsService){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"

        },
        {
            label: "Demo actions",
            url: "#/demomath"
        },
        {
            label: "Drop Menu",
            url: "#/dropdown"
        }
    ];

    $scope.employeeActionList = employeeActionsService;
}]);