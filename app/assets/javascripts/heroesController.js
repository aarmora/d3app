
(function(){

	var heroesController = function ($scope, $http, $routeParams){

		$http({
			url:'getHero',
			method: 'GET',
			params: {battle_tag: $routeParams.id}
		}).success(function(data){
			console.log(data);
			$scope.data = data;
		});

	}

	heroesController.$inject = ['$scope', '$http', '$routeParams'];

	diabloApp.controller('heroesController', heroesController);

}());