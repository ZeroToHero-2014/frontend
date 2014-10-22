/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('ContactController', ['$scope', function($scope) {
    $scope.title = 'HR Contact';
    $scope.currentDate = new Date();

    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    }
}]);