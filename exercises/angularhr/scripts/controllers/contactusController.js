hrApp.controller('contactusController', ['$scope', function($scope) {
    $scope.title = 'Contact us';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);
