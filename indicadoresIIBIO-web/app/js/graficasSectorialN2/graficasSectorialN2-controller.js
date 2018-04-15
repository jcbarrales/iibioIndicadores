angular.module('indicadoresIIBIO')
.controller('graficasSectorialN2Controller',['$scope','$window','$location','$timeout','Services','$rootScope','$cookieStore','toaster','ngProgressFactory',
function ($scope,$window,$location,$timeout,Services,$rootScope,$cookieStore,toaster,ngProgressFactory) {
    
    $scope.progressbar = ngProgressFactory.createInstance();
    
    if ($cookieStore.get('estudio')==undefined) {
        $cookieStore.put('estudio','ATENCIONID');
        $cookieStore.put('titulo',' de personas atendidas');
    }
    $scope.titulo = $cookieStore.get('titulo');
    $scope.mes = 1;
    
    $scope.estilo={
        color:"#FF0000",
        backgroundColor:'yellow'
    }
    
    $scope.listaMeses = function () {        
        
        Services.Meses(function(response) {
            $rootScope.row = response.data;
            if(response.data.length > 0){
                var log = [];
                $scope.datameses=[];
                angular.forEach($rootScope.row, function(value,key) {
                    $scope.datameses.push(value.mes_valor);
                },log);
                //$cookieStore.put('meses',$scope.datameses) 
            }
            else {
                $scope.datameses = ["Enero", "Febrero", "Marzo",
                "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre",
                "Octubre", "Noviembre", "Diciembre"];
            }
            $scope.MesFunction($scope.datameses[0]);
            
            $("#range_09").ionRangeSlider({
                    grid: true,
                    from: 0,//aqui le indicas donde inicia el slider
                    values: $scope.datameses,
                    //metodos disponible ocupa el que mejor te parezca
                    onStart: function (data) {
                        $scope.MesFunction(data.from_value);
                        $scope.progressbar.start();
                        $rootScope.listaSexo();
                        $rootScope.listaEdades();
                        $rootScope.listaDerechoHabiencia();
                        $scope.progressbar.complete();
                    },
                    /*onChange: function (data) {
                    console.log("onChange : " + data.from_value);
                    },*/
                    onFinish: function (data) {
                        $scope.MesFunction(data.from_value);   
                        $scope.progressbar.start();
                        $rootScope.listaSexo();
                        $rootScope.listaEdades();
                        $rootScope.listaDerechoHabiencia();
                        $scope.progressbar.complete();
                    },
                    /*onUpdate: function (data) {
                    console.log("onUpdate: " + data.from_value);
                    }*/
            });
                
        });
    }

    $rootScope.listaSexo = function () {
        estado = 'VERACRUZ'
        estudio = $cookieStore.get('estudio');
        mes = $scope.mes;
        ejercicio = 0;
        consulta = 'SEXO';
        $scope.listacatalogo=[];
        Services.IndicadorSectorial(estado,estudio,mes,ejercicio,consulta,
            function(response) {
            $rootScope.row = response.data;
            if (response.data.length > 0) {
                var log = [];
                $scope.total = 0;
                angular.forEach($rootScope.row, function(value,key){
                    $scope.total += (value.KEY_NAMESEXO=="TOTAL"?0:value.KEY_PDM);
                },log);
                $scope.listaSexo = response.data;
            }
        });
    }
    
    $rootScope.listaEdades = function () {
        estado = 'VERACRUZ'
        estudio = $cookieStore.get('estudio');
        mes = $scope.mes;
        ejercicio = 0;
        consulta = 'EDADES';
        $scope.listacatalogo=[];
        
        Services.IndicadorSectorial(estado,estudio,mes,ejercicio,consulta,
            function(response) {
            $scope.progressbar.start();
            $rootScope.row = response.data;
            $scope.progressbar.complete();
            if (response.data.length > 0) {
                var log = [];
                $scope.totaledades = 0;
                angular.forEach($rootScope.row, function(value,key){
                    $scope.totaledades += (value.KEY_NAMESEXO=="TOTAL"?0:value.KEY_PDM);
                },log);
                $scope.listaEdades = response.data;
                $rootScope.avanceEdades();
                
            }
        });
    }
    
    $rootScope.avanceEdades = function() {
                    
                    var log = [];
                    $scope.dataetiquetasx=[];
                    $scope.dataserieuno=[];
                    $scope.dataseriedos=[];
                    
                    angular.forEach($scope.listaEdades, function(value,key) {
                        if (value.KEY_SEXO != null){
                            if (value.KEY_SEXO=="F"){
                                $scope.dataserieuno.push(value.KEY_PDM);
                                $scope.dataetiquetasx.push(value.KEY_INDEX);
                            }
                            else {
                                $scope.dataseriedos.push(value.KEY_PDM*-1);
                            }
                        }
                    },log);
                    
                    var ctxbar = document.getElementById('myChart').getContext('2d');

                    var myChart = new Chart(ctxbar, {
                          type: 'horizontalBar',
                          data: {
                            labels: $scope.dataetiquetasx,
                            datasets: [{
                              label: 'Femenino',
                              backgroundColor: "rgba(255,177,193,1)",
                              data: $scope.dataserieuno,
                              
                            }, 
                            {
                              label: 'Masculino',
                              backgroundColor: "rgba(154,208,245,1)",
                              data: $scope.dataseriedos,
                              
                            }]
                          },
                        options: {
                                // Elements options apply to all of the options unless overridden in a dataset
                                // In this case, we are setting the border of each horizontal bar to be 2px wide
                                elements: {
                                    rectangle: {
                                        borderWidth: 2,
                                    }
                                },
                                responsive: true,
                                legend: {
                                    position: 'right',
                                },
                                title: {
                                    display: true,
                                    text: ''
                                }
                        }
                        });
    };
    
    $rootScope.listaDerechoHabiencia = function () {
        estado = 'VERACRUZ'
        estudio = $cookieStore.get('estudio');
        mes = $scope.mes;
        ejercicio = 0;
        consulta = 'DERECHOHABIENCIA';
        $scope.listacatalogo=[];
        Services.IndicadorSectorial(estado,estudio,mes,ejercicio,consulta,
            function(response) {
            $rootScope.row = response.data;
            if (response.data.length > 0) {
                var log = [];
                $scope.totaldh = 0;
                angular.forEach($rootScope.row, function(value,key){
                    $scope.totaldh += (value.KEY_NAMESEXO=="TOTAL"?0:value.KEY_PDM);
                },log);
                $scope.progressbar.start();
                $scope.listaDerechoHabiencia = response.data;
                $rootScope.avanceDerechoHabiencia();
                $scope.progressbar.complete();
            }
        });
    }
    
     $rootScope.avanceDerechoHabiencia = function() {
                    
                    var log = [];
                    $scope.dataetiquetasx=[];
                    $scope.dataserieuno=[];
                    $scope.dataseriedos=[];
                    
                    angular.forEach($scope.listaDerechoHabiencia, function(value,key) {
                        if (value.KEY_SEXO != null){
                            if (value.KEY_SEXO=="F"){
                                $scope.dataserieuno.push(value.KEY_PDM);
                                $scope.dataetiquetasx.push(value.KEY_INDEX);
                            }
                            else {
                                $scope.dataseriedos.push(value.KEY_PDM*-1);
                            }
                        }
                    },log);
                    
                    var ctxbar = document.getElementById('myChartderechohabiencia').getContext('2d');

                    var myChart = new Chart(ctxbar, {
                          type: 'horizontalBar',
                          data: {
                            labels: $scope.dataetiquetasx,
                            datasets: [{
                              label: 'Femenino',
                              backgroundColor: "rgba(255,177,193,1)",
                              data: $scope.dataserieuno,
                              
                            }, 
                            {
                              label: 'Masculino',
                              backgroundColor: "rgba(154,208,245,1)",
                              data: $scope.dataseriedos,
                              
                            }]
                          },
                        options: {
                                // Elements options apply to all of the options unless overridden in a dataset
                                // In this case, we are setting the border of each horizontal bar to be 2px wide
                                elements: {
                                    rectangle: {
                                        borderWidth: 2,
                                    }
                                },
                                responsive: true,
                                legend: {
                                    position: 'right',
                                },
                                title: {
                                    display: true,
                                    text: ''
                                }
                        }
                        });
    };
    $scope.listaMeses();
    
    $scope.MesFunction = function (mesStr) {
        
        switch (mesStr) {
            case 'Enero': 
                 $scope.mes = 1;
                 break;
            case 'Febrero': 
                 $scope.mes = 2;
                 break;
            case 'Marzo': 
                 $scope.mes = 3;
                 break;
            case 'Abril': 
                 $scope.mes = 4;
                 break;
            case 'Mayo': 
                 $scope.mes = 5;
                 break;
            case 'Junio': 
                 $scope.mes = 6;
                 break;
            case 'Julio': 
                 $scope.mes = 7;
                 break;
            case 'Agosto': 
                 $scope.mes = 8;
                 break;
            case 'Septiembre': 
                 $scope.mes = 9;
                 break;
            case 'Octubre': 
                 $scope.mes = 10;
                 break;
            case 'Noviembre': 
                 $scope.mes = 11;
                 break;
            case 'Diciembre': 
                 $scope.mes = 12;
                 break;
            default:
                0;
                break;
        }
    }
    
}                                            
])