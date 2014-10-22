/**
 * Created by ovy on 10/22/2014.
 */
hrApp.controller('ChildScopeController', ['$scope', function($scope){
    $scope.setTitle = function() {
        $scope.title = 'Child Scope Title';
    };
}]);
