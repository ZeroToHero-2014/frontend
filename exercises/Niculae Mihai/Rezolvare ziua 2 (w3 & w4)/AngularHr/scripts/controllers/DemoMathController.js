hrApp.controller('DemoMathController',['$scope',function($scope){
$scope.adunare = ($scope.numA) + ($scope.numB);
$scope.division = function(a,b) {
    var c = a / b;
    if (c &&  (b != 0))
        return c;
    else
        return '/'
}
}] );

