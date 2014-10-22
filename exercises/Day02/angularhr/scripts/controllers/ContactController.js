/**
 * Created by George on 10/22/2014.
 */
hrApp.controller('ContactController', ['$scope', function($scope) {
    $scope.title = 'Contact us';
    $scope.descriptionShow = true;
    $scope.myFunction = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);