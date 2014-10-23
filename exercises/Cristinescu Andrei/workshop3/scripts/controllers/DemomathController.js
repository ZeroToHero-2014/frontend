/**
 * Created by Andrei on 10/23/2014.
 */
hrApp.controller('DemomathController', ['$scope', function($scope) {
   $scope.title ="My Application";
    $scope.resetFirstVariable = function () {
        $scope.a = undefined;
        $scope.b = undefined;
    };
}]);