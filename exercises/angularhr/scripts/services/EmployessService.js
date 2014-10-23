/**
 * Created by ovy on 10/23/2014.
 */
hrApp.factory('employeeActionsService', function() {
    var employeeActionList = [
        {
            label: "List all employees",
            url: "#/employeeslist"
        },
        {
            label: "Add employee",
            url: "#/addemployee"
        },
        {
            label: "SingleEmployee",
            url: "#/employee"
        }
    ];
    return employeeActionList;
});
