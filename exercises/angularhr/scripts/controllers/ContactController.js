/**
 * Created by user on 10/22/2014.
 */
hrApp.controller('ContactController', ['$scope', function($scope) {
    $scope.titlu = 'Contact Us';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == false) {
            $scope.descriptionShow = true;
        } else {
            $scope.descriptionShow = false;
        }
    };
}]);