hrApp.controller('MathController', ['$scope', function($scope) {
    $scope.title = 'Demomath - Calcule';
   // $scope.childtemplate = 'templates/childscope.html';
    //$scope.parseInt = parseInt;
    $scope.resetVarA = function() {
        $scope.VarA = undefined;
    };
    $scope.setVarA = function(val) {
        $scope.VarA = val;
    };

    $scope.resetVarB = function() {
        $scope.VarB = undefined;
    };
    $scope.setVarB = function(val) {
        $scope.VarB = val;
    };

// forteaza doar numere la input:
    $(".numar").keypress(function (e) {
        if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
    });


}]);