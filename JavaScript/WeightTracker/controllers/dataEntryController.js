var wTrackerApp = angular.module('wTrackerApp');

wTrackerApp.controller('dataEntryController', ['$scope', 'curWeigthService', function ($scope, curWeigthService) {

    //http://curioussolutions.github.io/DateTimePicker/
//    http://eternicode.github.io/bootstrap-datepicker/?markup=component&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&todayBtn=false&clearBtn=false&language=it&orientation=auto&multidate=&multidateSeparator=&calendarWeeks=on&autoclose=on&keyboardNavigation=on&forceParse=on#sandbox
    $scope.curWeigth = curWeigthService.curWeigth;
    $scope.curDate = curWeigthService.curDate;

    $scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'it',
        //startDate: "2012-10-01",
        //endDate: "2012-10-31",
        todayHighlight: true,
        autoclose: true,
        weekStart: 0
    }

    //$scope.$watch('curWeigth', function () {
    //    curWeigthService.curWeigth = $scope.curWeigth;
    //});

    $scope.AddWeigth = function () {

        //  var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());

        var now = new Date();
        var date_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), parseInt($scope.curDate));

        curWeigthService.AddWeigth(date_utc, parseInt($scope.curWeigth));
    };
  
}
]);