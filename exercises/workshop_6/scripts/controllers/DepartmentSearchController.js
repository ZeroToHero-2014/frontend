hrApp.controller('DepartmentSearchController', ['$scope', '$http', function($scope, $http){
    $scope.departments = [];
    $scope.temp= false;

    $scope.tempo=false;
    $scope.getID = function () {
        $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + $scope.inputValue, method: 'GET'}).

            success(function (data, status, headers, config) {
                $scope.departments = data;
                $scope.temp=true;

                if(data=='null'){
                  $scope.tempo=true;
                    $scope.temp=false;
                }else{
                    $scope.tempo=false;
                    $scope.temp=true;
                }
            }).
            error(function (data, status, headers, config) {
                console.log(data);
                $scope.tempo=true;
            })

    }
}]);