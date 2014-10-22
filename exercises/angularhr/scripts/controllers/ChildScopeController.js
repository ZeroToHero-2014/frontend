hrApp.controller('ChildScopeController', ['$scope', function($scope){
    $scope.setTitle = function() {
        $scope.title = 'Child Scope Title';
    };
}]);
