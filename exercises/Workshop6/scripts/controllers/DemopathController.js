/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('DemopathController', ['$scope', function($scope) {
    $scope.title = 'Learn math!';
    $scope.childtemplate = 'templates/demopath.html';
    $scope.parseInt = parseInt;
    $scope.resetVariables = function () {
        $scope.numberA = undefined;
        $scope.numberB = undefined;
    };
}]);