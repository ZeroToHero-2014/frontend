/**
 * Created by George on 10/24/2014.
 */
hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();
    $scope.employeeActionList = employeeActionsService;
}]);