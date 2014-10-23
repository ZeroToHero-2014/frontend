hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Cauta dupa Id';
   // $scope.setinputvalue = function (val) {
        //$scope.inputvalue = val;
    //};
    $scope.search = function () {
        $scope.result = [];
       // $scope.inputvalue = [];

    $http.get('http://demo.teamnet.ro:8282/datamodel/departments/findOne/' +$scope.inputvalue).
        success(function (data, status, headers, config) {
            $scope.result = data;
        }).
        error(function (data, status, headers, config) {
            $scope.result = status;
        });
};
}]);