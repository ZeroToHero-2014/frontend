hrApp.factory('employeeActionsService', function() {
         var employeeActionList = [
                 {
                 label: "List all employees",
             url: "#/employeeslist"
         },
         {
         label: "Add employee",
     url: "#/employeeadd"
 }
 ];
 return employeeActionList;
});