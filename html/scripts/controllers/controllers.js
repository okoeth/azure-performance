'use strict';

/* Some maths stuff */

var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
},
getMin = function( numArr ){
  if( !isArray(numArr) || numArr.length==0 ){ return false; }
  var min = numArr[0];
  for (var i = 0; i < numArr.length; i++) {
    min = min < numArr[i] ? min : numArr[i]; 
  }
  return min;
},
getMax = function( numArr ){
  if( !isArray(numArr) || numArr.length==0 ){ return false; }
  var max = numArr[0];
  for (var i = 0; i < numArr.length; i++) {
    max = max > numArr[i] ? max : numArr[i]; 
  }
  return max;
},
getNumWithSetDec = function( num, numOfDec ){
  var pow10s = Math.pow( 10, numOfDec || 0 );
  return ( numOfDec ) ? Math.round( pow10s * num ) / pow10s : num;
},
getAverage = function( numArr, numOfDec ){
  if( !isArray( numArr ) ){ return false; }
  var i = numArr.length, 
    sum = 0;
  while( i-- ){
    sum += numArr[ i ];
  }
  return getNumWithSetDec( (sum / numArr.length ), numOfDec );
},
getVariance = function( numArr, numOfDec ){
  if( !isArray(numArr) ){ return false; }
  var avg = getAverage( numArr, numOfDec ), 
    i = numArr.length,
    v = 0;
 
  while( i-- ){
    v += Math.pow( (numArr[ i ] - avg), 2 );
  }
  v /= numArr.length;
  return getNumWithSetDec( v, numOfDec );
},
getStandardDeviation = function( numArr, numOfDec ){
  if( !isArray(numArr) ){ return false; }
  var stdDev = Math.sqrt( getVariance( numArr, numOfDec ) );
  return getNumWithSetDec( stdDev, numOfDec );
},
logstats = function( list, i ){
  console.log (list);
  console.log ('logstats: ' + i);
};

/* Controllers */

var app = angular.module('bmbsPerformanceApp.controllers', []);

// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
  /*
  console.log("app.run");
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
  */
});

app.controller('MainCtrl', ['$scope', 'TestRecordFactory', 'TestShortListFactory', 'TestLongListFactory', '$location', 
  function ($scope, TestRecordFactory, TestShortListFactory, TestLongListFactory, $location) {

    $scope.hideAll = function () {
      $scope.hasRecord = false;
      $scope.hasShortList = false;
      $scope.hasLongList = false;
      $scope.hasSummaryProgress = false;
      $scope.hasSummaryList = false;
    };
    $scope.runTestRecord = function () {
      console.log('testRecord');
      $scope.hideAll();
      $scope.testRecord = TestRecordFactory.run();
      $scope.hasRecord = true;
    };
    $scope.runTestShortList = function () {
      console.log('testShortList');
      $scope.hideAll();
      $scope.testShortList = TestShortListFactory.run();
      $scope.hasShortList = true;
    };
    $scope.runTestLongList = function () {
      console.log('testLongList');
      $scope.hideAll();
      $scope.testLongList = TestLongListFactory.run();
      $scope.hasLongList = true;
    };
    $scope.showResult = function () {
      console.log('showResult');
      $scope.$apply(function () {
        $scope.hideAll();
        $scope.hasSummaryList = true;
      });
    };
    $scope.calculateResult = function (valuesDuration, testSummary) {
      console.log('calculateResult');
      testSummary[0].value = getMin(valuesDuration).toFixed(2) + 'ms';
      testSummary[1].value = getMax(valuesDuration).toFixed(2) + 'ms';
      testSummary[2].value = getAverage(valuesDuration, 2) + 'ms';
      testSummary[3].value = getVariance(valuesDuration, 2);
      testSummary[4].value = getStandardDeviation(valuesDuration, 2);
    };
    $scope.recordResult = function (list, start, valuesDuration, testSummary) {
      valuesDuration.push(performance.now()-start);
      console.log('logging value: '+(performance.now()-start));
      $scope.calculateResult(valuesDuration, testSummary);
    };
    $scope.probeResult = function (factory, valuesDuration, testSummary) {
      $scope.testLongList = factory.run(
        $scope.recordResult.bind(null, null, performance.now(), valuesDuration, testSummary)
      );
    };
    $scope.runTestSummaryList = function () {
      $scope.runs=10;
      $scope.progress=0;
      console.log('testSummary for '+$scope.runs+' runs');
      $scope.hideAll();
      $scope.hasSummaryProgress = true;

      // 1: Record
      $scope.testSummaryRecord = [
        { criteria : 'Minimum', value : 0 },
        { criteria : 'Maximum', value : 0 },
        { criteria : 'Average', value : 0 },
        { criteria : 'Variance', value : 0 },
        { criteria : 'Standard Deviation', value : 0 }
      ];

      $scope.valuesRecordDuration = [];
      for (var i = 0; i < $scope.runs; i++) {
        setTimeout(
          $scope.probeResult.bind(
            null, 
            TestRecordFactory, 
            $scope.valuesRecordDuration,
            $scope.testSummaryRecord
          ), 
          500*i
        );
      }
      /*
      setTimeout(
        $scope.calculateResult.bind(null, $scope.testSummaryRecord, $scope.valuesRecordDuration), 
        500*$scope.runs
      );
      */

      // 2: Short list
      $scope.testSummaryShortList = [
        { criteria : 'Minimum', value : 0 },
        { criteria : 'Maximum', value : 0 },
        { criteria : 'Average', value : 0 },
        { criteria : 'Variance', value : 0 },
        { criteria : 'Standard Deviation', value : 0 }
      ];

      $scope.valuesShortListDuration = [];
      for (var i = 0; i < $scope.runs; i++) {
        setTimeout(
          $scope.probeResult.bind(
            null, 
            TestShortListFactory, 
            $scope.valuesShortListDuration,
            $scope.testSummaryShortList
          ), 
          500*($scope.runs+i)
        );
      }
      /*
      setTimeout(
        $scope.calculateResult.bind(null, $scope.testSummaryShortList, $scope.valuesShortListDuration), 
        500*(2*$scope.runs)
      );
      */

      // 3: Long list
      $scope.testSummaryLongList = [
        { criteria : 'Minimum', value : 0 },
        { criteria : 'Maximum', value : 0 },
        { criteria : 'Average', value : 0 },
        { criteria : 'Variance', value : 0 },
        { criteria : 'Standard Deviation', value : 0 }
      ];

      $scope.valuesLongListDuration = [];
      for (var i = 0; i < $scope.runs; i++) {
        setTimeout(
          $scope.probeResult.bind(
            null, 
            TestLongListFactory, 
            $scope.valuesLongListDuration,
            $scope.testSummaryLongList
          ), 
          500*(2*$scope.runs+i)
        );
      }
      /*
      setTimeout(
        $scope.calculateResult.bind(null, $scope.testSummaryLongList, $scope.valuesLongListDuration), 
        500*(3*$scope.runs+2)
      );
      */

      // Done
      setTimeout(
        $scope.showResult, 
        500*(3*$scope.runs+3)
      );
    };
    $scope.init = function () {
      $scope.hideAll();
      $scope.testRecord = { firstname : '', lastname : '', phone : '', email : '', wechat : '' };
      $scope.testShortList = [];
      $scope.testLongList = [];
      $scope.testSummaryList = [];
    };

    $scope.init();
  }]);

