hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();
    $scope.employeeActionList = employeeActionsService;
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];
}]);