hrApp.controller('ContactusController', ['$scope', function($scope) { /*al 2lea param e o functie care reprez controllerul/un array in care primele elem sunt depend pe care vrem sa le injectam */
    $scope.title = 'HR Application';
    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == false) {
            $scope.descriptionShow = true;
        } else {
            $scope.descriptionShow = false;
        }
    };
}]);