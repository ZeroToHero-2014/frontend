/**
 * Created by Andrei on 10/22/2014.
 */
hrApp.controller('DescriptionController', ['$scope', function($scope) {
    $scope.title = 'My description';
    $scope.description = 'My description is a short description';
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);