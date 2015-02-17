

//MODULE
var wTrackerApp = angular.module('wTrackerApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

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

wTrackerApp.controller('infoController', ['$scope', function ($scope) {
}
]);

wTrackerApp.controller('settingsController', ['$scope', function ($scope) {
}
]);

//wTrackerApp.controller('ButtonsCtrl', function ($scope) {
//    $scope.singleModel = 1;
//    $scope.radioModel = 'opt1';
//    $scope.checkModel = {
//        opt1: false,
//        opt2: true,
//        opt3: false
//    };
//});

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
                window.location.href = "#/"
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

//SERVICES
wTrackerApp.service('curWeigthService', function() {
    this.curWeigth = 0;
});
