/**
 * Created by Dsk on 10/24/2014.
 */
hrApp.controller('MenuController', ['$scope', 'employeeActionsService',
    function($scope, employeeActionsService){
        $scope.employeeActionList = employeeActionsService;
    }]);