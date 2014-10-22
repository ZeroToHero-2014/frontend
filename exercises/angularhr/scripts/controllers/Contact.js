/**
 * Created by ovy on 10/22/2014.
 */
hrApp.controller('Contact', ['$scope', function($scope) {
    $scope.title = 'Contact';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);/**
 * Created by ovy on 10/22/2014.
 */
/**
 * Created by ovy on 10/22/2014.
 */
