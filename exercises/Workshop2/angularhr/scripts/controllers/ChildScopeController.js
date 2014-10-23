/**
 * Created by iancu_000 on 23-Oct-14.
 */
hrApp.controller('ChildScopeController', ['$scope', function($scope){
    $scope.setTitle = function() {
        $scope.title = 'Child Scope Title';
    };
}]);
