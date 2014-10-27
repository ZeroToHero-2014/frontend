hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope,employeeActionList){
    $scope.currentDate = new Date();
    $scope.employeeActionList = employeeActionList;
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        },
        {
            label: "Math",
            url: "#/demomath"
                    },
        {
            label: "DropDown",
            url: "#/dropdown"
        }
    ];
    }]);