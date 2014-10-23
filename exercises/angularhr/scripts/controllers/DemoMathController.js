/**
 * Created by Juvie on 23.10.2014.
 */
hrApp.controller('DemoMathController', ['$scope', function($scope){
    $scope.title = 'Demo Math';
    $scope.addition = function(val1, val2) {
        $scope.sum = val1+val2;
    };
}]);