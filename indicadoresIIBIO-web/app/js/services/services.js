'use strict';

angular.module('indicadoresIIBIO').factory('Services', ['$http','$rootScope', 'CONFIG',
    function ( $http, $rootScope,CONFIG) {
        var service = {};


        //***************************************************************************
        //********************* SERVICIOS DE CATÁLOGOS ******************************
        //***************************************************************************
        service.Meses = function (callback )
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Catalogo/cat_Meses' })
                .then(function successCallback(data) {
                    response.success = true;
                    response.data = data.data;
                    callback(response);
                }, function errorCallback(response) {
                    response.success = false;
                    response.message = response.statusText;
                    callback(response);
                });
        };
        
        service.Municipios = function (callback )
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Catalogo/cat_Municipios' })
                .then(function successCallback(data) {
                    response.success = true;
                    response.data = data.data;
                    callback(response);
                }, function errorCallback(response) {
                    response.success = false;
                    response.message = response.statusText;
                    callback(response);
                });
        };

        //***************************************************************************
        //********************* SERVICIOS DE TRANSACCIONES **************************
        //***************************************************************************

        service.Principal = function (estado,municipio,sexo, callback )
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Indicador/N2_01_data_web'+ '/' +estado+'/'+municipio+ '/' + sexo })
            .then(function successCallback(data) {
                response.success = true;
                response.data = data.data;
                callback(response);
            }, function errorCallback(response) {
                response.success = false;
                response.message = response.statusText;
                callback(response);
            });
        };

        service.Detalle = function (estudio,estado,municipio,sexo,callback )
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Hallazgo/N3_Hallazgo/'+estudio+'/'+estado +'/'+municipio +'/' +sexo })
                .then(function successCallback(data) {
                    response.success = true;
                    response.data = data.data;
                    callback(response);
                }, function errorCallback(response) {
                    response.success = false;
                    response.message = response.statusText;
                    callback(response);
                });
        };
        
        service.IndicadorAvg = function(estado,estudio,mes,ejercicio,callback) 
        {
            var response = {};
            $http({
                mehod: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Catalogo/n2_01_dataavg/'+estado+'/'+estudio+'/'+mes+'/'+ejercicio })
            .then(function succesCallback(data) {
                response.success = true;
                response.data = data.data;
                callback(response);
            }, function erroCallback(response){
                response.success = false;
                //response.message = response.statusText;
                callback(response);
            });
        };
        
        service.Indicador = function(estado,estudio,mes,ejercicio,callback)
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Catalogo/n2_01_data/'+estado+'/'+estudio+'/'+mes+'/'+ejercicio })
            .then(function succesCallback(data) {
                response.success =true;
                response.data = data.data;
                callback(response);
            }, function erroCallback(response){
                response.success = false;
                callback(response);
            });
        };
        
        service.IndicadorSectorial = function(estado,estudio,mes,ejercicio,consulta,callback)
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Catalogo/n2_01_dataSector/'+estado+'/'+estudio+'/'+mes+'/'+ejercicio+'/'+consulta })
            .then(function succesCallback(data) {
                response.success =true;
                response.data = data.data;
                callback(response);
            }, function erroCallback(response){
                response.success = false;
                callback(response);
            });
        };
        
        service.IndicadorHallazgo = function(estado,claveH, nombreH,estudio,mes,ejercicio,consulta,callback)
        {
            var response = {};
            $http({
                method: 'GET',
                url: CONFIG.APIURL+'/indicadoresIIBIO/ii_Catalogo/n2_02_data/'+estado+'/'+claveH+'/'+nombreH+'/'+estudio+'/'+mes+'/'+ejercicio+'/'+consulta })
            .then(function succesCallback(data) {
                response.success =true;
                response.data = data.data;
                callback(response);
            }, function erroCallback(response){
                response.success = false;
                callback(response);
            });
        };
    return service;
}
]);
