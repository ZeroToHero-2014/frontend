hrApp.controller('SearchController', ['$scope','$http', function($scope,$http) {
    $scope.childtemplate = 'templates/search.html';
    $scope.title = ' Cauta departamentul dupa ID';
    $scope.search = function () {
        $scope.result = [];
        $scope.department = undefined;
        $scope.message = "Departamentul cu acest ID nu exista";};
    $scope.getdepartament = function (id) {

    $http.get('http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + id)
        .success(function (data, status, headers, config) {
            if(data != null){
                $scope.result = data;
            }
        })
        .error(function (data, status, headers, config) {
        });
}
}]);