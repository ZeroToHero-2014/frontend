hrApp.controller('MenuController', ['$scope', 'employeeActionsService',function($scope,orice){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];
    $scope.employeeActionList=orice;
}]);
