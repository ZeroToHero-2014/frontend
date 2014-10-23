/**
 * Created by Dsk on 10/23/2014.
 */
hrApp.controller('DropdownController', ['$scope', function($scope) {
    $scope.title = "Dropdown example";
    $scope.selectedCity = "Rome";
    $scope.cities = [
        "Rome",
        "Paris",
        "Bucharest",
        "New York"
    ];
    $scope.cars = [
        {
            id: 1,
            label: "Dacia"
        },
        {
            id: 2,
            label: "Ford"
        },
        {
            id: 3,
            label: "Opel"
        },
        {
            id: 4,
            label: "Renault"
        }
    ];
    $scope.selectedCar = $scope.cars[1];
}]);