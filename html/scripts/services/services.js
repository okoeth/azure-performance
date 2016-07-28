'use strict';

var services = angular.module('bmbsPerformanceApp.services', ['ngResource']);
var baseUrl = 'http://heroku-jp-perforce-test.herokuapp.com';
//var baseUrl = 'http://localhost:5000';

services.factory('TestRecordFactory', function ($resource) {
    return $resource(baseUrl + '/testRecord', {}, {
        run: { method: 'GET' }
    })
});

services.factory('TestShortListFactory', function ($resource) {
    return $resource(baseUrl + '/testShortList', {}, {
        run: { method: 'GET', isArray: true }
    })
});

services.factory('TestLongListFactory', function ($resource) {
    return $resource(baseUrl + '/testLongList', {}, {
        run: { method: 'GET', isArray: true }
    })
});
