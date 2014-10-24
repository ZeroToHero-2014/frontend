/**
 * Created by Buli on 24.10.2014.
 */
hrApp.controller('MenuController', ['$scope','employeeActionsService', function($scope,employeeActionsService){
    $scope.employeeActionList = employeeActionsService;
}]);