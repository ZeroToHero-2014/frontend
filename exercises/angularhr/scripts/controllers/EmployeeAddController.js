/**
 * Created by user on 10/23/2014.
 */
hrApp.controller('EmployeeAddController', ['$scope', function($scope) {
    $scope.titlu = 'Employee List';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == false) {
            $scope.descriptionShow = true;
        } else {
            $scope.descriptionShow = false;
        }
    };
}]);