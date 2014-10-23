hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();
    $scope.fserv  = employeeActionsService;


$scope.demoActionList = [
    {
        label: "Two Way Binding",
        url: "#/twowaybinding"
    },

    {
        label: "Demomath",
        url: "#/demomath"
    },

    {
        label: "Dropdown",
        url: "#/dropdown"
    }
];

}]);