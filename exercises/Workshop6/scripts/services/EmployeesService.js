/**
 * Created by Dumitru on 23.10.2014.
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
            label: "See employee",
            url: "#/employeesee"
        }
    ];
    return employeeActionList;
});