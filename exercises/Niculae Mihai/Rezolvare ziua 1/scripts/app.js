var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 1200
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 2000
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 2400
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 1700
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 2400
    }
];



function showList(){

    var myTable = '<table class="table table-striped table-bordered table-condensed" border = "1"><tr> <th>First Name</th> <th>Last Name</th> <th>Phone</th> <th>Salary </th></tr>';

for(var i in employeesList){
myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td> <td>'+employeesList[i].salary+'</td></tr>';


}
    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;

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
    var salary = parseInt(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone,
        salary));
    showList();
}

function sum(){
var s = 0;
    for(var i in employeesList){
        s+= employeesList[i].salary;}

    var container = document.getElementById('totalSalarii');
    container.innerHTML = '<p> Totalul salariilor este '+ s + '</p>';
    }

function deleteLast(){
employeesList.pop();
    showList();
}