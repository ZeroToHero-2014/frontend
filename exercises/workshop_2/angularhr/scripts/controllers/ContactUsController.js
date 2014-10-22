hrApp.controller('ContactUsController',['$scope',function($scope) {
    $scope.title='HR Application';
    $scope.descriptionShow=true;
    $scope.toggleDescriptionShow=function(){
        if($scope.descriptionShow==true){
            $scope.descriptionShow=false;
        }else{
            $scope.descriptionShow=true;
        }
    };
}])