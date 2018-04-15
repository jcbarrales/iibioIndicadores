angular.module('indicadoresIIBIO')
.controller('hallazgosController',
            ['$scope','$window','$location','$timeout','Services','$rootScope','$cookieStore','toaster','ngProgressFactory',
            function ($scope,$window, $location,$timeout,Services,$rootScope,$cookieStore,toaster,ngProgressFactory) {
                
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
                                    $scope.listaTabla();
                                    $rootScope.avanceBarra();
                                    $rootScope.listaJurisdiccion();
                                $scope.progressbar.complete();
                            },
                            /*onChange: function (data) {
                            console.log("onChange : " + data.from_value);
                            },*/
                            onFinish: function (data) {
                                $scope.MesFunction(data.from_value);   
                                $scope.progressbar.start();
                                $scope.listaTabla();
                                $rootScope.avanceBarra();
                                $rootScope.listaJurisdiccion();
                                $scope.progressbar.complete();
                            },
                            /*onUpdate: function (data) {
                            console.log("onUpdate: " + data.from_value);
                            }*/
                    });

                });
            }
             
                $rootScope.listaTabla = function () {
                    estado = 'VERACRUZ'
                    hClave = $cookieStore.get('hClave');
                    hNombre = $cookieStore.get('hNombre');
                    estudio = $cookieStore.get('estudio');
                    mes = $scope.mes;
                    ejercicio = 0;
                    consulta = 'TABLA';
                    $scope.listacatalogo=[];
                    Services.IndicadorHallazgo(estado,hClave,hNombre,estudio,mes,ejercicio,consulta,
                        function(response) {
                        $rootScope.row = response.data;
                        if (response.data.length > 0) {
                            var log = [];
                            $scope.total = 0;
                            angular.forEach($rootScope.row, function(value,key){
                                $scope.total += value.KEY_PDM;
                            },log);
                            $scope.listatabla = response.data;
                        }
                    });
                }
                
                
                $rootScope.avanceBarra = function () {
                    estado = 'VERACRUZ'
                    hClave = $cookieStore.get('hClave');
                    hNombre = $cookieStore.get('hNombre');
                    estudio = $cookieStore.get('estudio');
                    mes = $scope.mes;
                    ejercicio = 0;
                    consulta = 'TABLA';
                    $scope.listacatalogo=[];
                    Services.IndicadorHallazgo(estado,hClave,hNombre,estudio,mes,ejercicio,consulta,
                        function(response) {
                            $rootScope.row = response.data;
                            if(response.data.length > 0 ) {
                                var log = [];
                                $scope.dataetiquetasx=[];
                                $scope.dataserieuno=[];
                                angular.forEach($rootScope.row, function(value,key) {
                                    if (value.KEY_INDEX !="TOTAL"){
                                            $scope.dataserieuno.push(value.KEY_PDM);
                                            if (value.KEY_INDEX == "S/R"){ 
                                                etiqueta = "NORMAL"
                                            }
                                            else {
                                                etiqueta = value.KEY_INDEX
                                            }
                                             $scope.dataetiquetasx.push(etiqueta);
                                    }
                                },log);

                                var ctxbar = document.getElementById('myChart').getContext('2d');

                                var myChart = new Chart(ctxbar, {
                                      type: 'bar',
                                      data: {
                                        labels: $scope.dataetiquetasx,
                                        datasets: [{
                                          label: 'Diagnóstico',
                                          data: $scope.dataserieuno,
                                          backgroundColor: "rgba(255,177,193,1)"
                                        },]
                                      }
                                    });
                            }
                        }
                    )
                }
                
                $rootScope.listaJurisdiccion = function () {
                    estado = 'VERACRUZ'
                    hClave = $cookieStore.get('hClave');
                    hNombre = $cookieStore.get('hNombre');
                    estudio = $cookieStore.get('estudio');
                    mes = $scope.mes;
                    ejercicio = 0;
                    consulta = 'JURISDICCION';
                    $scope.listacatalogo=[];
                    Services.IndicadorHallazgo(estado,hClave,hNombre,estudio,mes,ejercicio,consulta,
                        function(response) {
                        $rootScope.row = response.data;
                        if (response.data.length > 0) {
                            var log = [];
                            $scope.totaljurisdiccion = 0;
                            
                            $scope.dataetiquetasx=[];
                            $scope.dataserieuno=[];
                            
                            angular.forEach($rootScope.row, function(value,key){
                                $scope.totaljurisdiccion += (value.KEY_INDEX=="TOTAL"?0:value.KEY_PDM);
                                
                                if (value.KEY_INDEX =="TOTAL"){
                                            $scope.dataserieuno.push(value.KEY_PDM);
                                            $scope.dataetiquetasx.push(value.KEY_VALUE);
                                    }
                            },log);
                            $scope.listaJurisdiccion = response.data;
                            
                            var ctxbarJ = document.getElementById('myChartJ').getContext('2d');

                                var myChartJ = new Chart(ctxbarJ, {
                                      type: 'bar',
                                      data: {
                                        labels: $scope.dataetiquetasx,
                                        datasets: [{
                                          label: 'Jurisdicciones',
                                          data: $scope.dataserieuno,
                                          backgroundColor: "rgba(255,177,193,1)"
                                        },]
                                      }
                                    });
                        }
                    });
                }
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