hrApp.controller('MathController', ['$scope', function($scope) {

    $scope.operations = function(a,b) {
        $scope.sum = parseInt(a)+parseInt(b);
        $scope.sub =  parseInt(a)-parseInt(b);
        $scope.mul =  parseInt(a)*parseInt(b);
        $scope.div =  parseInt(a)/parseInt(b);
    };

}]);