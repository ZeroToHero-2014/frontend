hrApp.controller('ContactController', ['$scope', function($scope) {
    $scope.title = 'Contact';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == false) {
            $scope.descriptionShow = true;
        } else {
            $scope.descriptionShow = false;
        }
    };
}]);