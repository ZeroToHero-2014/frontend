hrApp.controller('DemomathController', ['$scope', function($scope) { /*al 2lea param e o functie care reprez controllerul/un array in care primele elem sunt depend pe care vrem sa le injectam */
    $scope.childtemplate = 'templates/demomath.html';
    $scope.sumNumbers = function() {
        var suma = parseInt(document.getElementById('nrA').value) + parseInt(document.getElementById('nrB').value);
        var sum='<p>'+suma+'</p>';
        var container = document.getElementById('operation');
        container.innerHTML = sum;
    };
    $scope.substractNumbers = function() {
        var dif = 0;
        if (parseInt(document.getElementById('nrA').value) >= parseInt(document.getElementById('nrB').value)) {
            dif = parseInt(document.getElementById('nrA').value) - parseInt(document.getElementById('nrB').value);
        }else{
            dif = parseInt(document.getElementById('nrB').value) - parseInt(document.getElementById('nrA').value);
        }
        var sum='<p>'+dif+'</p>';
        var container = document.getElementById('operation');
        container.innerHTML = sum;
    };
    $scope.multiplicateNumbers = function() {
        var produs = parseInt(document.getElementById('nrA').value)*parseInt(document.getElementById('nrB').value);
        var sum='<p>'+produs+'</p>';
        var container = document.getElementById('operation');
        container.innerHTML = sum;
    };
    $scope.divideNumbers = function() {
        var cat = parseInt(document.getElementById('nrA').value) / parseInt(document.getElementById('nrB').value);
        var sum='<p>'+cat+'</p>';
        var container = document.getElementById('operation');
        container.innerHTML = sum;
    };
}]);