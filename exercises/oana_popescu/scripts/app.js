var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 100
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 200

    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 300

    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 400

    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 500

    }
];
function showList() {
    var myTable = '<table class="table table-hover table-condensed" border="1"><tr class="info"><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td></tr>';
    }
    myTable += '</table>'+"<button onclick=calculateSalaryTotal()>Salary total</button>";
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = parseInt(salary);
}
function calculateSalaryTotal() {
    var sum  = 0;
    for (var i in employeesList) {
        sum = sum + employeesList[i].salary;
    }
    var container = document.getElementById('totalsalarycontainer');
    var totalSalary = '<p>'+ sum +'</p>';
    container.innerHTML = totalSalary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}
function deleteLastEmployee() {

    var lastEmp = employeesList.length - 1;
    employeesList.splice(lastEmp, 1);
}

