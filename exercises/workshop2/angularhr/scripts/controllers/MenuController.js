
hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionList){

    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
        ,
        {
            label: "Demo math",
            url: "#/demomath"
        }
    ];
    $scope.employeeActionList = employeeActionList;
}]);
