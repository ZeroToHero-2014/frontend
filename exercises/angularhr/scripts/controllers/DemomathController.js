hrApp.controller('DemomathController', ['$scope', function($scope){
    $scope.title = 'Demomath Title';
    $scope.selectedNumber = function() {
        $scope.number1 = undefined;
        $scope.number2 = undefined;
    };
}]);


