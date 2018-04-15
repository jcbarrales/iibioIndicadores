/**
 * Created by velascoasesores on 30/05/2017.
 */
'use strict';
angular.module('Authentication')
    .controller('LoginController',['$scope','$rootScope','$location','AuthenticationService','$state',
        '$cookieStore','$modal','$timeout','$http','toaster',
    function ($scope,$rootScope,$location,AuthenticationService,$state,$cookieStore,$modal,
              $timeout,$http,toaster) {

        $scope.itemClick = function(path){
            $location.path(path);
        };

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    $scope.entro = $rootScope.globals.currentUser.username;
                    AuthenticationService.SetCredentials($scope.username, $scope.password,response.idclient);
                    console.log('entro');
                            $location.path('dashboard');
              } else {
                    console.log('datos incorrectos');
                    toaster.warning({title:'Notificacion', body:'Datos incorrectos'});
                    $scope.dataLoading = false;

                }
            });
        };


    }]);
