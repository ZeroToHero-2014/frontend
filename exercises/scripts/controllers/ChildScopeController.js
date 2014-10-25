/**
 * Created by Iulia on 10/24/2014.
 */
hrApp.controller('ChildScopeController', ['$scope', function($scope){
    $scope.setTitle = function() {
        $scope.title = 'Child Scope Title';
    };
}]);