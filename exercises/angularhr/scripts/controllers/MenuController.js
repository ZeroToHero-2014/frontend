hrApp.controller('MenuController', ['$scope','EmployeeActionsService', function($scope,employee){
    $scope.currentDate = new Date();
    $scope.employeeActionList=employee;

    $scope.demoActionList = [
    {
        label: "Two Way Binding",
        url: "#/twowaybinding"
    }
];

}]);