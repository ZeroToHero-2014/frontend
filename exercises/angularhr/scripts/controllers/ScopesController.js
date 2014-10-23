/**
 * Created by Juvie on 23.10.2014.
 */
hrApp.controller('ScopesController', ['$scope', function($scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
}]);