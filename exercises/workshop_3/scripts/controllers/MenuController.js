hrApp.controller('MenuController',['$scope',function($scope){
    $scope.currentDate=new Date();




    $scope.demoActionList=[
        {
            label:"Two way Binding",
            url:"#/twowaybinding"
        },
        {
            label:"DemoMath",
            url:"#/demomath"
        }
    ];
}]);


