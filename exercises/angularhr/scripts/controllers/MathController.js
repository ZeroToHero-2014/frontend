hrApp.controller('MathController', ['$scope', function($scope){

    $scope.title = 'Math Demo';
    $scope.addition = function() {
        $scope.answer = parseInt($scope.firstVariable) + parseInt($scope.secondVariable)
    }
    $scope.substraction = function() {
        $scope.answer = parseInt($scope.firstVariable) - parseInt($scope.secondVariable)
    }
    $scope.multiplication = function() {
        $scope.answer = parseInt($scope.firstVariable) * parseInt($scope.secondVariable)
    }
    $scope.division = function() {
        $scope.answer = parseInt($scope.firstVariable) / parseInt($scope.secondVariable)
    }
    $scope.reset = function() {
        $scope.firstVariable = undefined;
        $scope.secondVariable = undefined;
    };

}]);