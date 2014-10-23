/**
 * Created by Bogdan on 10/23/2014.
 */
hrApp.factory('employeeActionsService', function() {
    var employeeActionList = [
        {
            label: "List all employees",
            url: "#/employeeslist"
        },
        {
            label: "Add employee",
            url: "#/employeeadd"
        },
        {
            label: "Info employee",
            url: "#/employeeInfo"
        }
    ];
    return employeeActionList;
});