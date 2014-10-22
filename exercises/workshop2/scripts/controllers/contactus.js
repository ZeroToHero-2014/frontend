hrApp.controller('contactus', ['$scope', function($scope) {
    $scope.title = 'Primul exercitiu';
    $scope.descriptionHide = false;
    $scope.toggleDescriptionHide = function() {
        if($scope.descriptionHide == false) {
            $scope.descriptionHide = true;
        } else {
            $scope.descriptionHide = false;
        }
    };
}]);