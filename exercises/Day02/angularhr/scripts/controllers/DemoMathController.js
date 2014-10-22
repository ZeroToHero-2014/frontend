/**
 * Created by George on 10/22/2014.
 */
hrApp.controller('DemoMathController', ['$scope', function($scope) {
    $scope.title = 'Demo Math';

    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.setSecondVariable = function(val) {
        $scope.firstVariable = val;
    };

    $scope.addition = function(){
        $scope.result = $scope.firstVariable + $scope.secondVariable;
    }
    $scope.substraction = function(){
        $scope.result =  $scope.firstVariable - $scope.secondVariable;
    }
    $scope.multiplication = function(){
        $scope.result = $scope.firstVariable * $scope.secondVariable;
    }
    $scope.division = function(){
        $scope.result = $scope.firstVariable / $scope.secondVariable;
    }
}]);