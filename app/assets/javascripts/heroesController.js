
(function(){

	var heroesController = function ($scope, $http, $routeParams){

		console.log($routeParams.battle_tag_name);
		console.log($routeParams.battle_tag_number);

		$http({
			url:'getHero',
			method: 'GET',
			params: {battle_tag_name: $routeParams.battle_tag_name, battle_tag_number: $routeParams.battle_tag_number, hero_id: $routeParams.id}
		}).success(function(data){
			console.log(data);
			$scope.data = data;
		});

	}

	heroesController.$inject = ['$scope', '$http', '$routeParams'];

	diabloApp.controller('heroesController', heroesController);

}());