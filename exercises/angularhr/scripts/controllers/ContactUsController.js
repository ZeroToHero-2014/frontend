hrApp.controller('ContactUsController', ['$scope', function($scope) {
    $scope.heading = 'Contact us';
    $scope.descriptionHide = false;
    $scope.toggleDescriptionHide = function() {
        if($scope.descriptionHide == true) {
            $scope.descriptionHide = false;
        } else {
            $scope.descriptionHide = true;
        }
    };
}]);