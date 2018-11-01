'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$interpolateProvider', function ($interpolateProvider) {
		$interpolateProvider.startSymbol('{[');
		$interpolateProvider.endSymbol(']}');
	}])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl: '../static/partials/main.html'
			})
			.when('/main', {
				templateUrl: '../static/partials/main.html'
			})
			;
	}])
;
