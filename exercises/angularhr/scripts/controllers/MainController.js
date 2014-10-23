/**
 * Created by Maria on 10/22/2014.
 */
hrApp.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'HR Application';
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        $scope.descriptionShow = $scope.descriptionShow != true;
    };
}]);
