
(function(){

	var heroesController = function ($scope, $http, $routeParams){

		console.log($routeParams.battle_tag)

		$http({
			url:'getHero',
			method: 'GET',
			params: {battle_tag: $routeParams.battle_tag, hero_id: $routeParams.id}
		}).success(function(data){
			console.log(data);
			$scope.data = data;
		});

	}

	heroesController.$inject = ['$scope', '$http', '$routeParams'];

	diabloApp.controller('heroesController', heroesController);

}());