/**
 * Created by Maria on 10/23/2014.
 */
hrApp.controller('DemoMath', ['$scope', function($scope){

    $scope.title = 'Demo math';
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