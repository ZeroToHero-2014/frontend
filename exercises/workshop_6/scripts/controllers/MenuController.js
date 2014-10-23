hrApp.controller('MenuController',['$scope','employeeActionsService',function($scope,list_1){
    $scope.currentDate=new Date();

    $scope.employeeActionList=list_1;




    $scope.demoActionList=[
        {
            label:"Two way Binding",
            url:"#/twowaybinding"
        },
        {
            label:"DemoMath",
            url:"#/demomath"
        },
        {
            label:"Dropdown Menu",
            url:"#/dropdown"
        }
    ];
}]);


