/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('MainController', ['$scope', function($scope) {
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

/*
    injectat scopul
    scope este creeat cand se init cu ng-app
    toate var treb def pe $scope
 */