hrApp.controller('MenuController', ['$scope','employeeActionsService' ,function($scope,asd){
    $scope.currentDate = new Date();

    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];

    $scope.employeeActionList=asd;

}]);



/* modificam ceea ce avem nevoie de la ruta la ruta
 folosim when sau otherwise
 */