/**
 * Created by Andrei on 10/21/2014.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 700
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 7900
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 67464
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 3453
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 5654
    }
];
function showList() {
    var myTable = '<table border="1" class="table table-hover"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
    }
    myTable += '</table>';
    myTable += '<button onclick="sum()">Sum</button><p id="suma"></p>';
    myTable += '<button onclick="remove()">Remove last entry</button><p id="suma"></p>';
    var container = document.getElementById('listcontainer');

    container.innerHTML = myTable;
}
function remove(){
    var s =0;
   for(var i=0; i<employeesList.length;i++){
           s += employeesList[i].salary;
   }
    var totalSalary = '<p>Total sum of salaries: ' +s +'<\p>';
    var mySum = document.getElementById("suma");
    suma.innerHTML = totalSalary;

}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone,salary));
    showList();
}