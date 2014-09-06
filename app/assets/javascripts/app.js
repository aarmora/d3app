var diabloApp = angular.module('diabloApp', ['ngRoute']);

diabloApp.config(function ($routeProvider){
	$routeProvider
	.when('/heroes/:id', {
		controller: 'heroesController',
		templateUrl: '../templates/Heroes.html'
	})
	.otherwise({
		controller: 'homeController',
		templateUrl: '../templates/Index.html'
	})
});

