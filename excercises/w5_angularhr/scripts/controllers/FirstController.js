/**
 * Created by Anca on 22.10.2014.
 */
hrApp.controller('FirstController', ['$scope', function($scope) {
    $scope.title = 'HR Application';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);