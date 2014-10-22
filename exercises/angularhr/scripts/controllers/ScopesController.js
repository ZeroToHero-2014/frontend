/**
 * Created by ovy on 10/22/2014.
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
