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
        salary: 3000
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 1500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 1900
    }
];
function showList() {

    unhideList();

    if(employeesList.length>0) {
        var myTable = '<table border="1" class="list"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
        for (var i in employeesList) {
            myTable +=
                '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td></tr>';
        }
        myTable += '</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
    }
    else
    {
        var text="There are no employess in list.";
        var container=document.getElementById('listcontainer');
        container.innerHTML=text;
    }


}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function checkEmployee()
{
    if(firstName.length==0)
        return 0;

    if(lastName.length==0)
        return 0;

    var numbers = /^[0-9]+$/;
    if(!salary.value.match(numbers))
        return 0;

    return 1;
}

function addEmployee()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;

    if(checkEmployee(firstName,lastName,phone,salary)==1)
        employeesList.push(new Employee(firstName, lastName, phone,salary));

    showList();

    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("phone").value="";
    document.getElementById("salary").value="";
}

function SalaryTotal()
{
    unhideList();

    if(employeesList.length>0) {
        var sum = 0;

        var myTable = '<table border="1" class="list"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
        for (var i in employeesList) {
            myTable +=
                '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td></tr>';
        }


        for (var i in employeesList)
            sum += parseInt(employeesList[i].salary);
        myTable += '<tr id="total"><td colspan="2">Total</td><td colspan="2">' + (sum / employeesList.length).toFixed() + '</td></tr></table>';

        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
    }

    else
    {
        var text="There are no employess in list.";
        var container=document.getElementById('listcontainer');
        container.innerHTML=text;
    }
}

function DeleteLastEmployee()
{
    unhideList();

    employeesList.pop();
    if(employeesList.length>0)
        showList();
    else
    {
        var text="There are no employess in list.";
        var container=document.getElementById('listcontainer');
        container.innerHTML=text;
    }
}

function OrderBySalary()
{
    employeesList.sort(function (a, b) {
            if (a.salary > b.salary) {
                return 1;
            }
            if (a.salary < b.salary) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    showList();
}

function hideList()
{
    var container=document.getElementById('listcontainer').style.visibility='hidden';
}

function unhideList()
{
    var container=document.getElementById('listcontainer').style.visibility='visible';
}