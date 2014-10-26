/**
 * Created by user on 10/25/2014.
 */

hrApp.controller('DemoMathController', ['$scope','sum', function($scope, sum) {
    $scope.title = 'Demo Math';
    $scope.childtemplate = 'templates/demomath.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };

    $scope.setSecondVariable = function(val) {
        $scope.secondVariable = val;
    };


}]);