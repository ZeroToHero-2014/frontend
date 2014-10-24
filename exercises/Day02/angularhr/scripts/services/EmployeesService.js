/**
 * Created by George on 10/23/2014.
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
            label: "Search employee by ID",
            url: "#/employeesearch"
        },
        {
            label: "Select employee from list",
            url: "#/employeeselect"
        }
    ];
    return employeeActionList;
});