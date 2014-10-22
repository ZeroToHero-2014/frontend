/**
 * Created by Juvie on 22.10.2014.
 */
hrApp.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'HR Application';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == false) {
            $scope.descriptionShow = true;
        } else {
            $scope.descriptionShow = false;
        }
    };
}]);
