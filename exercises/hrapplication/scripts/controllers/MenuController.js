/**
 * Created by Dumitru on 24.10.2014.
 */
hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();
    $scope.employeeActionList = employeeActionsService;
}]);