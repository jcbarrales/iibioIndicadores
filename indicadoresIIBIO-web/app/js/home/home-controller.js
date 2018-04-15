angular.module('indicadoresIIBIO')
    .controller('HomeController', ['$scope','$cookieStore','Services','$location','$route',
        function ($scope,$cookieStore,Services,$location,$route) {


              $scope.eligeEstudio = function(estudio,titulo) {
                  $cookieStore.put('estudio',estudio);
                  $cookieStore.put('titulo',titulo);
                  $cookieStore.put('path','/dashboard');
                  $location.path('/reload');  
              }
              $scope.eligeHallazgo = function(claveH,nombreH,estudio,titulo ) {
                  $cookieStore.put('hClave',claveH);
                  $cookieStore.put('hNombre',nombreH);
                  $cookieStore.put('estudio',estudio);
                  $cookieStore.put('titulo',titulo);
                  $cookieStore.put('path','/hallazgos');
                  $location.path('/reload');  
              }
           /* $scope.municipio = function () {
                $cookieStore.put('municipio',$scope.cbmunicipios.resultado);
                $cookieStore.put('path','/dashboard');
                $cookieStore.put('genero',$scope.cbgenero.tipo);
                $location.path('/reload');
            

            $scope.inicial =function () {
                $cookieStore.put('municipio','*');
                $cookieStore.put('genero','*');
                $cookieStore.put('path','/dashboard');
                $location.path('/reload');
            }
            //$scope.inicial();
            
            $scope.cerrar = function () {
                $cookieStore.put('municipio','*');
                $cookieStore.put('genero','*');
                $location.path('/');
            }
            }*/









        }]);
