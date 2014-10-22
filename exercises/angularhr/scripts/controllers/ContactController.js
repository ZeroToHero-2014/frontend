hrApp.controller('ContactController', ['$scope', function($scope){
    $scope.heading = 'Contact';
    $scope.description = 'Phone: 021 000 000';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);