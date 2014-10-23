hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope,employeeActionsService){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"


        },
        {
            label: "Demo Math" ,
            url: "#/demomath"
        },
        {
            label: "Drop Down" ,
            url: "#/dropdown"
        }

    ];
    $scope.actionList=employeeActionsService;


}]);