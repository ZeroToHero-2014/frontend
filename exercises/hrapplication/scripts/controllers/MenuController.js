/**
 * Created by Maria on 10/24/2014.
 */

hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = employeeActionsService;
}]);
