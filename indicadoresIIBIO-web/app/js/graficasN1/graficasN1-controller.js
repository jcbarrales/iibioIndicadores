angular.module('indicadoresIIBIO')
.controller('GraficasN1Controller',['$scope','$window','$location','$timeout','Services','$rootScope','$cookieStore','toaster',
function ($scope,$window,$location,$timeout,Services,$rootScope,$cookieStore,toaster) {

    if ($cookieStore.get('estudio')==undefined) {
        $cookieStore.put('estudio','ATENCIONID');
        $cookieStore.put('titulo',' de personas atendidas');
    }
    $scope.titulo = $cookieStore.get('titulo');
    $scope.mes = 1;

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
                        $scope.avanceDona();
                        $scope.avanceBarra();
                        $scope.muestraMapa ();
                    },
                    /*onChange: function (data) {
                    console.log("onChange : " + data.from_value);
                    },*/
                    onFinish: function (data) {
                        $scope.MesFunction(data.from_value);
                        $scope.avanceDona();
                        $scope.avanceBarra();
                        $scope.muestraMapa ();
                    },
                    /*onUpdate: function (data) {
                    console.log("onUpdate: " + data.from_value);
                    }*/
            });

        });
    }

    $scope.avanceDona = function () {

        estado = 'VERACRUZ';
        estudio = $cookieStore.get('estudio');
        mes = $scope.mes;
        ejercicio = 0;

        Services.IndicadorAvg(estado,estudio,mes,ejercicio,
            function(response) {


                    $scope.KEY_PDM = response.data[0].KEY_PDM
                    $scope.KEY_PAM = response.data[0].KEY_PAM
                    $scope.KEY_MDM = response.data[0].KEY_MDM
                    $scope.KEY_MAM = response.data[0].KEY_MAM
                    $scope.KEY_ME  = response.data[0].KEY_ME
                    //$scope.KEY_AV  = response.data[0].KEY_AV

                    $scope.KEY_CPM = Math.round(100*(parseInt($scope.KEY_PDM)/ parseInt($scope.KEY_MDM)));
                    $scope.KEY_CPA = Math.round(100*(parseInt($scope.KEY_PAM)/ parseInt($scope.KEY_MAM)));
                    $scope.KEY_CAV = Math.round(100*(parseInt($scope.KEY_PAM)/ parseInt($scope.KEY_ME)));
                    var ctx = document.getElementById('myPieChart').getContext('2d');

                    var pieOptions = {
                  //Boolean - Whether we should show a stroke on each segment
                  segmentShowStroke: true,
                  //String - The colour of each segment stroke
                  segmentStrokeColor: "#fff",
                  //Number - The width of each segment stroke
                  segmentStrokeWidth: 2,
                  //Number - The percentage of the chart that we cut out of the middle
                  percentageInnerCutout: 50, // This is 0 for Pie charts
                  //Number - Amount of animation steps

                  animationSteps: 100,
                  //String - Animation easing effect
                  animationEasing: "easeOutBounce",
                  //Boolean - Whether we animate the rotation of the Doughnut
                  animateRotate: true,
                  //Boolean - Whether we animate scaling the Doughnut from the centre
                  animateScale: false,
                  //Boolean - whether to make the chart responsive to window resizing
                  responsive: true,
                  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                  maintainAspectRatio: true,
                  onAnimationComplete : null,
                  labelFontFamily : "Arial",
                  labelFontStyle : "normal",
                  labelFontSize : 48,
                  //String - A legend template
                  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
                };

                    var myPieChart = new Chart(ctx,{
                        type: 'doughnut',
                        data: {
                        labels: ["Avance", "Meta"],
                        datasets: [{
                        label: 'Índice de masa corporal',
                        data: [$scope.KEY_PAM,$scope.KEY_MAM],
                        backgroundColor: [
                            'rgba(243, 156, 18,1)',
                            'rgba(0,154,191,1)'
                        ],
                        borderColor: [
                            'rgba(243, 156, 18,1)',
                            'rgba(0,154,191, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                        // Configuration options go here
                        options: pieOptions

                    });
                //}
            }
        );
    }

    $scope.avanceBarra = function () {

        mes = $scope.mes;
        Services.Indicador(estado,$cookieStore.get('estudio'),mes,ejercicio,
            function(response){
                $rootScope.row = response.data;
                if(response.data.length > 0 ) {
                    var log = [];
                    $scope.dataetiquetasx=[];
                    $scope.dataserieuno=[];
                    $scope.dataseriedos=[];

                    angular.forEach($rootScope.row, function(value,key) {
                        //$scope.datavalores=[];
                        //$scope.datavalores.push(value.KEY_X,value.KEY_PA,value.KEY_PM);
                        $scope.dataserieuno.push(value.KEY_PA);
                        $scope.dataseriedos.push(value.KEY_PM);
                        $scope.dataetiquetasx.push(value.key_X);
                    },log);

                    var ctxbar = document.getElementById('myChart').getContext('2d');

                    var myChart = new Chart(ctxbar, {
                          type: 'bar',
                          data: {
                            labels: $scope.dataetiquetasx,
                            datasets: [{
                              label: 'Avance',
                              data: $scope.dataserieuno,
                              backgroundColor: "rgba(243, 156, 18,1)"
                            }, {
                              label: 'Meta',
                              data: $scope.dataseriedos,
                              backgroundColor: "rgba(0,154,191,1)"
                            }]
                          }
                        });
                }
            }
        )
    }

    $scope.muestraMapa = function () {
            estado = 'VERACRUZ'
            estudio =  $cookieStore.get('estudio');
            mes = $scope.mes;
            ejercicio = 0;
            consulta = 'MUNICIPIO';
            $scope.listacatalogo=[];
            Services.IndicadorSectorial(estado,estudio,mes,ejercicio,consulta,
                function(response) {
                    var locations = response.data;


                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 7,
                  center: {lat: 20.441752, lng: -98.5178891}
                });

                // Create an array of alphabetical characters used to label the markers.
                var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

                // Add some markers to the map.
                // Note: The code uses the JavaScript Array.prototype.map() method to
                // create an array of markers based on a given "locations" array.
                // The map() method here has nothing to do with the Google Maps API.
                var markers = locations.map(function(location, i) {
                  return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                  });
                });

                // Add a marker clusterer to manage the markers.
                var markerCluster = new MarkerClusterer(map, markers,
                    { gridSize: 30,
                      minimumClusterSize: 2,
                      imagePath: '/img/Markers/m'});
            })
        }


    $scope.listaMeses();

    $scope.fnsectorial = function(path) {
        $location.path(path);
    }

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
