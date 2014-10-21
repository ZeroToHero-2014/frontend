/**
 * Created by ovy on 10/21/2014.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary:'34'
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary:'34'
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary:'34'
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary:'34'
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary:'34'
    }
];
function showList() {
    var myTable = '<table border="1" class="table table-bordered"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></td></tr>';
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
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    var x1=document.getElementById("firstName").value="";
    var x2=document.getElementById("lastName").value="";
    var x3=document.getElementById("phone").value="";
    var x4=document.getElementById("salary").value="";
    showList();
}
function suma(){
    var g=0;
    for(var i in employeesList){
       g=g+parseInt(employeesList[i].salary);
    }
    var container = document.getElementById('suma');
    container.innerHTML = "Suma salariilor este"+g;

}
function del(){
    employeesList.pop();
    showList();
}