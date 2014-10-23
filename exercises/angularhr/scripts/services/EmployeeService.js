/**
 * Created by Buli on 23.10.2014.
 */
hrApp.factory('employeeActionsService', function(){
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
            label: "View employee",
            url: "#/viewemployee"
        }
    ];
    return employeeActionList;
});