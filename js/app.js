var prsnApi = angular.module('prsnApi', ['ngRoute']);

prsnApi.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
})