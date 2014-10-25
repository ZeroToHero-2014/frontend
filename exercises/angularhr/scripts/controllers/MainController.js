hrApp.controller('MainController', ['$scope', function($scope) { /*al 2lea param e o functie care reprez controllerul/un array in care primele elem sunt depend pe care vrem sa le injectam */
    $scope.title = 'HR Application';
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function() {
        if($scope.descriptionShow == true) {
            $scope.descriptionShow = false;
        } else {
            $scope.descriptionShow = true;
        }
    };
}]);