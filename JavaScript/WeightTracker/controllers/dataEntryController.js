var wTrackerApp = angular.module('wTrackerApp');

wTrackerApp.controller('dataEntryController', ['$scope', 'curWeigthService', function ($scope, curWeigthService) {

    //http://curioussolutions.github.io/DateTimePicker/
    //http://eternicode.github.io/bootstrap-datepicker/?markup=component&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&todayBtn=false&clearBtn=false&language=it&orientation=auto&multidate=&multidateSeparator=&calendarWeeks=on&autoclose=on&keyboardNavigation=on&forceParse=on#sandbox
    //alert(curWeigthService.curDate);

    $scope.curWeigth = curWeigthService.curWeigth;
    $scope.curDate = curWeigthService.curDate;

    $scope.datepickerOptions = {
        format: 'dd-mm-yyyy',
        language: 'it',
        //startDate: "2012-10-01",
        //endDate: "2012-10-31",
        todayHighlight: true,
        autoclose: true,
        forceParse: false,
        weekStart: 0
    }

    //$scope.$watch('curWeigth', function () {
    //    curWeigthService.curWeigth = $scope.curWeigth;
    //});

    $scope.AddWeigth = function () {
        //var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        //var now = new Date();
        var date = $scope.curDate;
       // console.debug("Date.parse(date) = " + Date.parse(date));
        var date_utc = Date.parse(date);
        if (isNaN(date_utc)) {
            console.debug("> date is ko: parsing datePicker string date");
            var year = date.substring(6, 10);
            console.debug("year = " + year);
            var month = date.substring(3, 5);
            console.debug("month = " + month);
            var day = date.substring(0, 2);
            console.debug("day = " + day);
            date_utc = Date.UTC(year, month, day);
        } else {
            console.debug("> date is ok");
        }
        
        //alert(Date.parse(date).toUTCString());
        //var date1 = new Date(date);
        //if (date.length = 10) {
        //    var date_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        //} else {
        //    alert("date ok");
        //}
        //console.debug("date.getUTCFullYear() = " + date.getUTCFullYear());
        //console.debug("date.getUTCMonth() = " + date.getUTCMonth());
        //console.debug("date.getUTCDate() = " + date.getUTCDate());
        //var date_utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

        curWeigthService.AddWeigth(date_utc, parseInt($scope.curWeigth));
    };

}
]);