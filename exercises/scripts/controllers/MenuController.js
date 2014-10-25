/**
 * Created by Iulia on 10/24/2014.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];

    $scope.mathLinks = [
        {
            label: "Demo Math",
            url: "#/demomath"
        }
    ];
}]);