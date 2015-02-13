
//MODULE
var wTrackerApp = angular.module('wTrackerApp', ['ngRoute', 'ngResource']);

//ROUTES
wTrackerApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/charts.html',
        controller: 'chartsController'
    })

    .when('/', {
        templateUrl: 'pages/dataEntry.html',
        controller: 'dataEntryController'
    })
});

wTrackerApp.controller('chartsController', ['$scope'], function ($scope) {

})

wTrackerApp.controller('dataEntryController', ['$scope'], function ($scope) {

})