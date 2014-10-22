hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];
}]);


/* modificam ceea ce avem nevoie de la ruta la ruta
 folosim when sau otherwise
 */