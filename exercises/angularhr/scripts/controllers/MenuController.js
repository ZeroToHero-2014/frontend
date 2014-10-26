/**
 * Created by user on 10/22/2014.
 */

hrApp.controller('MenuController', ['$scope' ,'employeeActionsService', function($scope, employeeActionsService){
    $scope.currentDate = new Date();

    $scope.demoActionList = [
        {
            label: "Two Way Binding",
            url: "#/twowaybinding"
        }
    ];

    $scope.demomath = [
        {
            label: "Demo Math",
            url: "#/demomath"
        }
    ];

    $scope.employeeActionList= employeeActionsService;   //injected service is employeeActionsService
}]);

//ca sa  injectam obiectul scope il introducem in fucntia noastra ;
//hrApp este o varibila definita in folderul scripts; iar in interiorul lui cream var hrApp,
// care va stoca modulul ce inatializeaza aplicatia nostra de angular

