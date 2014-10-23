hrApp.controller('ContactController',['$scope', function($sc){



$sc.title = 'Contact Us!';
$sc.description = ' You may contact us at our email adress.';
$sc.viz = true;
    $sc.tog = function(){;$sc.viz = (!$sc.viz); };
}]);