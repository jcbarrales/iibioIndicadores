// Declare app level module which depends on filters, and services
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Principal',[]);
angular.module('GraficasN1',[]);

angular.module('indicadoresIIBIO',
    [
        'Authentication',
        'Home',
        'Principal',
        'GraficasN1',
        'ngResource',
        'ngRoute',
        'ui.bootstrap',
        'ui.date',
        'ngCookies',
        'ui.router',
        'base64',
        'toaster',
        'ngProgress',
        'ngMaterial'
])


    .constant('CONFIG', {
        APIURL: 'http://127.0.0.1:8084'
    })

    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // For unmatched routes
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('login', {
                    url: '/',
                    controller: 'LoginController',
                    templateUrl: 'views/login/login.html',
                    hideNavbar: true
                })

                .state('home', {
                    url: '/',
                    controller: 'HomeController',
                    templateUrl: 'views/home/home.html'
                })

                .state('home.principal', {
                    url: 'principal',
                    controller: 'PrincipalController',
                    templateUrl: 'views/graficas/principal.html'
                })
                .state('home.hallazgos',{
                    url: 'hallazgos',
                    controller: 'hallazgosController',
                    templateUrl: 'views/graficas/hallazgos.html'
                })
                .state('home.dashboard', {
                    url: 'dashboard',
                    controller: 'GraficasN1Controller',
                    templateUrl: 'views/graficas/municipio.html'
                })
                .state('home.sectorial', {
                    url: 'sectorial',
                    controller: 'graficasSectorialN2Controller',
                    templateUrl: 'views/graficas/sectorial.html'
                })
                .state('home.jurisdiccional', {
                    url: 'jurisdiccion',
                    controller: 'graficasJurisdiccionalN2-controller',
                    templateUrl: 'views/graficas/jursidiccional.html'
                })
                .state('home.reload', {
                    url: 'reload',
                    controller: 'ReloadController',
                    templateUrl: 'views/graficas/reload.html'
                })

        }])

    .run(['$rootScope', '$location', '$cookieStore', '$http', '$state',
        function ($rootScope, $location, $cookieStore, $http, $state) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }
            $rootScope.session = $cookieStore.get('session') || {};
            if ($rootScope.session.username) {
                $http.defaults.headers.common['Authorization'] = 'Basic' + $rootScope.session.authdata;
            }
            $rootScope.$on('$stateChangeStart', function (event, toState, next, current) {
                // redirect to login page if not logged in
                if ($location.path() !== '/login') {
                    console.info($location.path())
                    $state.transitionTo("login");
                    event.preventDefault();
                }
            });
    }]);
