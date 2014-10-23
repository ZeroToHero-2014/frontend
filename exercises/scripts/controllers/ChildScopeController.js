/**
 * Created by Dsk on 10/23/2014.
 */

hrApp.controller('ChildScopeController', ['$scope', function($scope){
    $scope.setTitle = function() {
        $scope.title = 'Child Scope Title';
    };
}]);
