hrApp.controller('ScopesController', ['$scope', function($scope) { /*al 2lea param e o functie care reprez controllerul/un array in care primele elem sunt depend pe care vrem sa le injectam */
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
}]);