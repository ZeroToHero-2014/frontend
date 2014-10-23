hrApp.controller('ContactController', ['$scope', function($scope) {
     $scope.title = 'Contact us!';
     $scope.descriptionShow = true;

         $scope.toggleDescriptionShow = function() {
         if ($scope.descriptionShow == true) {
             $scope.descriptionShow = false;
             } else {
             $scope.descriptionShow = true;
             }
         }
        }]);