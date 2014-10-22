/**
 * Created by George on 10/22/2014.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];
    $scope.demoMathList = [
        {
            label: "Demo Math",
            url: "#/demomath"
        }
    ]
}]);

