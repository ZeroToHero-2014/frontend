/**
 * Created by Iulia on 10/24/2014.
 */
hrApp.controller('ContactController', ['$scope', function($scope) {
    $scope.title = 'Contact us';
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);