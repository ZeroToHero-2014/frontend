/**
 * Created by Maria on 10/22/2014.
 */
hrApp.controller('ContactusController', ['$scope', function($scope) {
    $scope.title= 'Contact us';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if ($scope.descriptionShow ==false){
            $scope.descriptionShow = true;
        }
        else {
            $scope.descriptionShow = false;
        }
    };
}]);
