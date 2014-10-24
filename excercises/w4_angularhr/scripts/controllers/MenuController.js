/**
 * Created by Anca on 22.10.2014.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();
    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        },{
            label:"Math",
            url:"#/demomath"
        }
    ];
}]);
