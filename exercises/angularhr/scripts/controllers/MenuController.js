/**
 * Created by ovy on 10/22/2014.
 */
hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope,varr){
    $scope.currentDate = new Date();
    $scope.var=varr;
$scope.demoActionList = [
    {
        label: "Two Way Binding",
        url: "#/twowaybinding"
    },
    {
        label: "DemoMath",
        url: "#/demomath"
    },
    {
        label:"DropDown",
        url: "#/drop"
    }




];
    $scope.demo = varr;


}]);