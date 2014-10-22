/**
 * Created by user on 10/22/2014.
 */

hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.currentDate = new Date();
}]);

//ca sa  injectam obiectul scope il introducem in fucntia noastra ;
//hrApp este o varibila definita in folderul scripts; iar in interiorul lui cream var hrApp,
// care va stoca modulul ce inatializeaza aplicatia nostra de angular
