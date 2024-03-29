
(function(){

	var homeController = function ($scope, $http){

		$scope.newBattleTag = function(battleTag){
			$http({
				url:'getJson',
				method: 'GET',
				params: {battle_tag: battleTag}
			}).success(function(data){
				console.log(data);
				$scope.data = data;
				$scope.splitBattleTagName = data.battleTag.split("#");
				console.log($scope.splitBattleTagName);
			});
		}

		$scope.newBattleTag('melayish#1811')

		$scope.checkArray = function(item){
			if(!(item instanceof Object)){
				return true
			}
		}

	}

	homeController.$inject = ['$scope', '$http'];

	diabloApp.controller('homeController', homeController);

}());