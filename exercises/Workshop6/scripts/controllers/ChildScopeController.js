/**
 * Created by Dumitru on 22.10.2014.
 */
hrApp.controller('ChildScopeController', ['$scope', function($scope){
    $scope.setTitle = function() {
        $scope.title = 'Child Scope Title';
    };
}]);