hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();


$scope.demoActionList = [
    {
        label: "Two Way Binding",
        url: "#/twowaybinding"
    },

    {
        label: "Demomath",
        url: "#/demomath"
    }
];

}]);