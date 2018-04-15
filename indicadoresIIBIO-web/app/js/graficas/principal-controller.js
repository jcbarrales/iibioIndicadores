/**
 * Created by velascoasesores on 31/05/2017.
 */
angular.module('indicadoresIIBIO')
.controller('PrincipalController', ['$scope','$window','$location','$timeout','Services','$rootScope',
    function ($scope, $window,  $location,$timeout,Services,$rootScope) {


    google.charts.load("current", {packages:["corechart","bar"]});

        Services.Principal('Veracruz','*','*',
            function(response) {
                $rootScope.row = response.data;
                google.charts.setOnLoadCallback(drawVisualization);
                function drawVisualization() {
                    var log = [];
                    $scope.data1=[]
                    $scope.data3=["Estudios",'Total']
                    $scope.data1.push($scope.data3);
                    angular.forEach( $rootScope.row, function(value, key) {
                        $scope.data2=[]
                        $scope.data2.push(value.llave,value.valor);
                        $scope.data1.push($scope.data2);

                    }, log);
                    var res = $scope.data1;
                    var data = google.visualization.arrayToDataTable(res);
                    var options = {
                        title: 'Veracruz',
                        height: 400,
                        hAxis: {
                            title: '',
                            minValue: 0
                        },
                        vAxis: {format: 'decimal'},
                        chartArea: {width: '50%'},
                        backgroundColor:'transparent',
                        chartArea: {backgroundColor:'transparent'}
                    };

                    var chart2 = new google.charts.Bar(document.getElementById('piechart_ST'));
                    chart2.draw(data, google.charts.Bar.convertOptions(options));
                }
            }, function (error) {
                console.info(error);
            });
    }
])

.controller('MunicipioController', ['$scope','$window','$location','$timeout','Services','$rootScope','$cookieStore','toaster',
function ($scope, $window,  $location,$timeout,Services,$rootScope,$cookieStore,toaster) {

    $scope.tabla =
    google.charts.load("current", {packages:["corechart","bar"]});

    $scope.cargaMunicipio = function (municipio,genero) {
        var title;
        if (municipio=='0' || municipio == '*'){
            municipio = '*';
            title = '';
        }else
            title= 'Municipio ' + $cookieStore.get('municipio');

        Services.Principal('Veracruz',municipio,genero,
            function(response) {
                $rootScope.row = response.data;
                if (response.data.length > 0){
                    var sexo;
                    if (genero == 'M'){
                        sexo = 'Masculino';
                    }else if(genero == 'F'){
                        sexo = 'Femenino';
                    }else{sexo = '';}

                    google.charts.setOnLoadCallback(drawVisualization);
                    function drawVisualization() {
                        var log = [];
                        $scope.data1=[]
                        $scope.data3=["Estudios",'Total ' + sexo]
                        $scope.data1.push($scope.data3);
                        $scope.labels = [];
                        $scope.valores = [];
                        angular.forEach( $rootScope.row, function(value, key) {
                            $scope.data2=[]
                            $scope.data2.push(value.llave,value.valor);
                            $scope.data1.push($scope.data2);
                            $scope.labels.push(value.llave);
                            $scope.valores.push(value.valor);
                        }, log);
                        var res = $scope.data1;
                        var data = google.visualization.arrayToDataTable(res);
                        var options = {
                            title: title, //$cookieStore.get('municipio'),
                            height: 400,
                            hAxis: {
                                title: '',
                                minValue: 0
                            },
                            vAxis: {format: 'decimal'},
                            chartArea: {width: '50%'},
                            backgroundColor:'transparent',
                            chartArea: {backgroundColor:'transparent'}
                        };

                        //var chart2 = new google.charts.Bar(document.getElementById('piechart_ST'));
                        var chart = new google.charts.Bar(document.getElementById('piechart_ST'));
                        function selectHandler() {
                            var selectedItem = chart.getSelection()[0];
                            if (selectedItem) {
                                var topping = data.getValue(selectedItem.row, 0);
                                alert('The user selected ' + topping);
                            }
                        }

                        google.visualization.events.addListener(chart, 'select', selectHandler);
                        chart.draw(data, google.charts.Bar.convertOptions(options));

                        $scope.chartjs($scope.labels,$scope.valores);
                        //chart2.draw(data, google.charts.Bar.convertOptions(options));
                    }
                }else{
                    toaster.warning({title:'Notificacion', body:'El municipio no contiene información'});
                }

            }, function (error) {
                console.info(error);
            });
    }

    $scope.cargaMunicipio($cookieStore.get('municipio'),$cookieStore.get('genero'));

    $scope.chartjs = function (labels,valores) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart1 = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: labels,
                datasets: [{
                    label: "Municipio",
                    backgroundColor: '#4285f4',
                    //borderColor: 'rgb(255, 99, 132)',
                    data: valores,
                }]
            },


            // Configuration options go here
            options: {}





        });
        $("#myChart").click(
            function(evt){
                var activePoints = chart1.getSegmentsAtEvent(evt);
                var url = "http://example.com/?label=" + activePoints[0].label + "&value=" + activePoints[0].value;
                alert(url);
            }
        );
    }

}
])

.controller('ReloadController', ['$scope','$window','$location','$timeout','Services','$rootScope','$cookieStore','toaster',
    function ($scope, $window,  $location,$timeout,Services,$rootScope,$cookieStore,toaster) {

        $scope.reload = function (path) {
            $location.path(path);
        }
       $scope.reload($cookieStore.get('path'));
    }
])
;
