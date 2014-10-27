hrApp.controller('MathController', ['$scope', function($scope) {
    $scope.title = 'Math';
    $scope.parseInt= parseInt;
    $scope.childtemplate = 'templates/math.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.resetSecondVariable = function() {
        $scope.secondVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.setSecondtVariable = function(val) {
        $scope.secondVariable = val;
    };
    }]);