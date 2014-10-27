hrApp.controller('ActionsController', ['$scope', '$http', function($scope, $http) {
    $scope.actions = [];
    $http.get({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne/' +id})
        .success(function(data, status, headers, config) {
            $scope.actions = data;
        })
        .error(function(data, status, headers, config) {
        });
}]);
