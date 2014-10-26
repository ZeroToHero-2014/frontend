/**
 * Created by Dsk on 10/23/2014.
 */
hrApp.controller('Contactus', ['$scope',function($scope){
    $scope.descriptionShow = "Description_show";
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);