hrApp.controller('MathController', ['$scope', function($scope) {
     $scope.title = 'Demomath - Calcule';
     // $scope.childtemplate = 'templates/childscope.html';
         $scope.parseInt = parseInt;
     $scope.resetVarA = function() {
         $scope.VarA = undefined;
         };
     $scope.setVarA = function(val) {
         $scope.VarA = val;
         };

         $scope.resetVarB = function() {
         $scope.VarB = undefined;
         };
     $scope.setVarB = function(val) {
         $scope.VarB = val;
         };

            }]);