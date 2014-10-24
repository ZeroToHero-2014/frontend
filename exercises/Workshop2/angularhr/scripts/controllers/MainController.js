/**
 * Created by Bogdan on 10/22/2014.
 */
hrApp.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'HR Application';
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);