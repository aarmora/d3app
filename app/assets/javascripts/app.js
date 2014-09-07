var diabloApp = angular.module('diabloApp', ['ngRoute']);

diabloApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/heroes/:id/:battle_tag*', {
		controller: 'heroesController',
		templateUrl: '../templates/Heroes.html'
	})
	.otherwise({
		controller: 'homeController',
		templateUrl: '../templates/Index.html'
	})
}]);

