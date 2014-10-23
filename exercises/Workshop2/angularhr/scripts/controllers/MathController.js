/**
 * Created by iancu_000 on 23-Oct-14.
 */
hrApp.controller('MathController', ['$scope', function($scope){
    $scope.title = 'Demo Math';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetVariables = function() {
        $scope.firstVariable = undefined;
        $scope.secondVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.setSecondVariable = function(val) {
        $scope.secondVariable = val;
    };
    $scope.calculate = function() {
        $scope.sum = $scope.firstVariable + $scope.secondVariable;
        $scope.sub = $scope.firstVariable - $scope.secondVariable;
        $scope.mult = $scope.firstVariable * $scope.secondVariable;
        $scope.div = $scope.firstVariable / $scope.secondVariable;
    };
}]);