//MODULE
var wTrackerApp = angular.module('wTrackerApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'highcharts-ng', 'ng-bootstrap-datepicker']);

//ROUTES
wTrackerApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/charts.html',
        controller: 'chartsController'
    })
    .when('/dataEntry', {
        templateUrl: 'pages/dataEntry.html',
        controller: 'dataEntryController'
     })
    .when('/charts', {
        templateUrl: 'pages/charts.html',
        controller: 'chartsController'
    })
    .when('/info', {
        templateUrl: 'pages/info.html',
        controller: 'infoController'
    })
    .when('/settings', {
        templateUrl: 'pages/settings.html',
        controller: 'settingsController'
    });
});

wTrackerApp.controller('TabsCtrl', function ($scope, $window) {

    //$scope.tabs = [
    //  { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    //  { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    //];

    $scope.selectTab = function (id) {
        //$window.alert(id);
        switch (id) {
            case 'charts':
                window.location.href = "#/charts"
                break;
            case 'dataEntry':
                window.location.href = "#/dataEntry"
                break;
            case 'info':
                window.location.href = "#/info"
                break;
            case 'settings':
                window.location.href = "#/settings"
                break;
        }
    };

    //setTimeout(function () {
    //    $window.alert('You\'ve selected the alert tab!');
    //});
});

