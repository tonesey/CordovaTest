//MODULE
var wTrackerApp = angular.module('wTrackerApp', ['ngRoute', 'ngResource']);

//ROUTES
wTrackerApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
            templateUrl: 'pages/dataEntry.html',
            controller: 'dataEntryController'
    })
    
    .when('/charts', {
            templateUrl: 'pages/charts.html',
            controller: 'chartsController'
    });
});

wTrackerApp.controller('chartsController', ['$scope', 'curWeigthService', function ($scope, curWeigthService) {

    $scope.curWeigth = curWeigthService.curWeigth;
}
]);

wTrackerApp.controller('dataEntryController', ['$scope', 'curWeigthService', function ($scope, curWeigthService) {

  $scope.curWeigth = curWeigthService.curWeigth;
    
  $scope.$watch('curWeigth', function() {
            curWeigthService.curWeigth = $scope.curWeigth;
  });
}
]);


//SERVICES
wTrackerApp.service('curWeigthService', function() {
    this.curWeigth = 0;
});
