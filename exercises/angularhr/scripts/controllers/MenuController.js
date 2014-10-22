/**
 * Created by ovy on 10/22/2014.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();

$scope.demoActionList = [
    {
        label: "Two Way Binding",
        url: "#/twowaybinding"
    },
    {
        label: "DemoMath",
        url: "#/demomath"
    }
];
}]);