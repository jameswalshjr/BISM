var app = angular.module('bism', ['ngRoute', 'ngCookies', 'ngResource','app.controllers', 'envconfig']);

app.config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/Utility/bismView.html',
            controller: 'bismController'
        })
        .when('/cookie', {
            templateUrl: 'views/Support/cookieView.html',
            controller: 'cookieController'
        })
        .when('/import', {
            templateUrl: 'views/Support/ImportView.html',
            controller: 'importController'
        });
}]);


