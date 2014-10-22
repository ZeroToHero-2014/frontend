/**
 * Created by user on 10/21/2014.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 2344
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 1234
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 5673
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 2324
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 2354
    }
];
function showList() {
    var myTable = '<table border="1" class="table-striped"><tr><th>First Name</th><th>LastName</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
            }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
function showSalary() {
    for(var i in employeesList) {
        suma=suma+employeesList[i].salary;
    }

}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone,
        salary));
}

function refresh() {
    window.reload();
}

