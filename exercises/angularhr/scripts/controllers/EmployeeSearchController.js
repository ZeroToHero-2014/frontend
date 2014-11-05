hrApp.controller('EmployeeSearchController', ['$scope', '$http', function(context,apelHttp){


    context.afiseaza = false;
    context.eroare = false;
    apelHttp({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findAll',
        method: 'GET'}).
        success(function (data) {
            context.employees = data;
            context.selectedEmploy = context.employees[0];
            context.eroare = false;
        }).error(function(data, status, headers, config){
            context.eroare = true;
        });
    context.afiseazaLocal = function(ang){
        context.afiseaza = true;
        context.id = ang.employeeId;
        context.prenume = ang.firstName;
        context.numeF = ang.lastName;
        context.salariu = ang.salary;
        context.departament = ang.departmentId.departmentName;
    }


    context.preluareExtern = function(id){


        apelHttp({url: 'http://demo.teamnet.ro:8282/datamodel/employees/findOne//' + id,
            method: 'GET'}).
            success(function (data) {
                context.afiseazaLocal(data)

            }  ).error(function(data, status, headers, config){
                context.eroare = true; ;
            });
    }




}]);