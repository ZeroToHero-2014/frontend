hrApp.controller('ContactUsController', ['$scope', function($scope) {
    $scope.title = 'Contact Us';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == false) {
            $scope.descriptionShow = true;
        } else {
            $scope.descriptionShow = false;
        }
    };
}]);
