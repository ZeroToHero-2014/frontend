$scope.title='Two Way Binding Demo';
$scope.childtemplate='templates/childscope.html';
$scope.resetFirstVariable=function(){
    $scope.firstVaribale=undefined;
};

$scope.setFirstVariable=function(val){
    $scope.firstVariable=val;
};
