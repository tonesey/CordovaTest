﻿var wTrackerApp = angular.module('wTrackerApp');
wTrackerApp.controller('chartsController', ['$scope', 'curWeigthService', function ($scope, curWeigthService) {

    //samples
    //http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/line-basic/

    $scope.DataFound = function () {
        console.debug("data len = " + curWeigthService.wData.length)
        return curWeigthService.wData.length > 0;
    };

    if (curWeigthService.wData.length === 0) {
        $scope.alert = { type: 'danger', msg: 'No data inserted right now. Start entering data!' };
        return;
    }

    $scope.curWeigth = curWeigthService.curWeigth;

    //$scope.alerts = [
    //    { type: 'danger', msg: 'Eat less! Run, run run!' },
    //    { type: 'success', msg: 'Well done!' }
    //];

    $scope.alert = { type: 'danger', msg: 'Run, run run :)' };
    //{ type: 'success', msg: 'Well done!' }

    //$scope.addAlert = function () {
    //    $scope.alerts.push({ msg: 'Another alert!' });
    //};

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'line'
            }
        },
        //series: [{
        //    data: [92, 90, 90, 85.5, 89, 90, 90, 91]
        //}],
        series: [{
            type: 'area',
            name: 'Your weight',
            //pointInterval: 10 * 3600 * 1000,
            //pointStart: Date.UTC(2015, 0, 1),
            //data: [
            //   90, 100, 92, 93, 95, 98, 100, 99, 81, 83, 83, 83, 83, 100
            //]
            data: curWeigthService.wData
         }],

        //    data: [
        //            [Date.UTC(2015, 2, 4), 102],
        //            [Date.UTC(2015, 2, 5), 98],
        //            [Date.UTC(2015, 2, 7), 95],
        //            [Date.UTC(2015, 2, 8), 90],
        //            [Date.UTC(2015, 2, 9), 92],
        //            [Date.UTC(2015, 2, 10), 102],
        //            [Date.UTC(2015, 2, 11), 98],
        //            [Date.UTC(2015, 2, 12), 95],
        //            [Date.UTC(2015, 2, 13), 90],
        //            [Date.UTC(2015, 2, 14), 92],
        //            [Date.UTC(2015, 2, 15), 98],
        //            [Date.UTC(2015, 2, 16), 92],
        //            [Date.UTC(2015, 2, 17), 94],
        //            [Date.UTC(2015, 2, 18), 92],
        //            [Date.UTC(2015, 2, 19), 91],
        //            [Date.UTC(2015, 2, 21), 90],
        //            [Date.UTC(2015, 2, 22), 87],
        //            [Date.UTC(2015, 2, 23), 86],
        //            [Date.UTC(2015, 2, 24), 85],
        //            [Date.UTC(2015, 2, 25), 85]
        //    ]
        //}],
        title: {
            text: 'The weigth tracker... ' + curWeigthService.curWeigth
        },
        //subtitle: {
        //    text: document.ontouchstart === undefined ?
        //            'Click and drag in the plot area to zoom in' :
        //            'Pinch the chart to zoom in'
        //},
        //Boolean to control showng loading status on chart (optional)
        //Could be a string if you want to show specific loading text.
        loading: false,
        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
        yAxis: {
            currentMin: 0,
            currentMax: 100,
            title: { text: 'weigth' }
        },
        xAxis: {
            type: 'datetime',
            minRange: 15 * 24 * 3600000 // fourteen days
        },
        legend: {
            enabled: false
        },
        //plotOptions: {
        //    area: {
        //        fillColor: {
        //            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        //            stops: [
        //                [0, Highcharts.getOptions().colors[0]],
        //                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        //            ]
        //        },
        //        marker: {
        //            radius: 2
        //        },
        //        lineWidth: 1,
        //        states: {
        //            hover: {
        //                lineWidth: 1
        //            }
        //        },
        //        threshold: null
        //    }
        //},
        //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
        useHighStocks: true,
        //size (optional) if left out the chart will default to size of the div or something sensible.
        //size: {
        //    width: 400,
        //    height: 300
        //},
        //function (optional)
        func: function (chart) {
            //setup some logic for the chart
        }
    }
}
]);
