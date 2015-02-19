var wTrackerApp = angular.module('wTrackerApp');
wTrackerApp.service('curWeigthService', function () {

    this.curWeigth = 50;
    //this.curDate = Date.UTC(2015, 2, 10);
    var now = new Date();
    var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    this.curDate = now;

    //this.wData = [];
    //var employees = {
    //    accounting: []
    //};
    //for (var i in someData) {
    //    var item = someData[i];
    //    employees.accounting.push({
    //        "firstName": item.firstName,
    //        "lastName": item.lastName,
    //        "age": item.age
    //    });
    //}5

    this.wData = [
                    [Date.UTC(2015, 2, 4), 80],
                    [Date.UTC(2015, 2, 5), 81],
                    [Date.UTC(2015, 2, 7), 82],
                    [Date.UTC(2015, 2, 8), 90],
                    [Date.UTC(2015, 2, 9), 80]
    ];

    this.count = 1;

    this.AddWeigth = function (date, weigth) {
        //alert("add" + this.curWeigth);
        //this.wData.push(this.curWeigth);
        //console.log("added " + this.curWeigth);
        //alert("add" + weigth);
        //this.wData.push(date, weigth);
        this.wData.push([date, weigth]);
        console.log("added " + weigth + " - now data len is " + this.wData.length);
        console.log(this.wData);
    }
});
