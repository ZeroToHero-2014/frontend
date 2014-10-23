hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope, EmployeeActionList){
    $scope.currentDate = new Date();
    $scope.employeeActionList= EmployeeActionList
    $scope.demoActionList = [
    {
        label: "Math",
        url:"#/demomath"
    },
    {
        label: "Two Way Binding",
        url: "#/twowaybinding"
    },
    {
        label: "cars",
        url: "#/dropdown"
    }
];
}]);
