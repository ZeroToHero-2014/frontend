hrApp.controller('DepartmentSearchController',['$scope','$http', function($scope,$http){

    $scope.cau = false;
    $scope.Search = function(i){

       // $scope.tr= false;
        if(i===undefined || i === null)
        {$scope.pbformat = true;
            $scope.cau = false;}
        else
        {   $scope.cau = true;
            $scope.pbformat = false;
            $http({url: 'http://demo.teamnet.ro:8282/datamodel/departments/findOne/' + i, method: 'GET'}).
                success(function (data, status, headers, config) {
                    $scope.data = data;
                    $scope.rez = true;
                }).
                error(function (data, status, headers, config) {
                    $scope.rez = false;
                });
        }
   };
}]);