/**
 * Created by TheBeastMaster on 21/10/2014.
 */
function showMenu() {
    document.getElementById("appmenu").style.display = 'block';
}
function hideMenu() {
    document.getElementById("appmenu").style.display = 'none';
}

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    { firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table border="1"  style="margin:0 auto"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Salary Total</th></tr>';
    for(var i in employeesList) {
        var sum = 0;
        myTable +=
            '<tr class="table-condensed">' +
            '   <td>'+employeesList[i].firstName+'</td>' +
                '<td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td>' +
                '<td>'+employeesList[i].salary+'</td>' +
                '<td>'
        if(!isNaN(this.salary) && this.innerHTML.length!=0) {
            sum += parseFloat(this.innerHTML);
        }
        sum
        '</td>'
            '</tr>';

    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName; this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
};
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
}

