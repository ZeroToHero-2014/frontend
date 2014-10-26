hrApp.controller( 'MenuController', [
    '$scope',
        'employeeActionsService',
        function($scope,  eAs)
        {
        $scope.currentDate = new Date();
        $scope.employeeActionList = eAs;

            $scope.demoActionList = [
                {
                    label: "Two Way Binding",
                    url: "#/twowaybinding"
                },
                {
                    label: "Demo Math",
                    url: "#/demomath"

                },
                {
                    label: "Demo actions ",
                    url: "#/dropdown"
                }


            ];

        }

    ]


);

