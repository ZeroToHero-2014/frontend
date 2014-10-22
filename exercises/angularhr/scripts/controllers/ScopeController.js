/**
 * Created by Buli on 22.10.2014.
 */
hrApp.controller('ScopeController',['$scope', function($scope){
    $scope.title='Two Way Binding Demo';
    $scope.childtemplate='templates/childscope.html';
    $scope.resetFirestVariable=function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    };
}]);