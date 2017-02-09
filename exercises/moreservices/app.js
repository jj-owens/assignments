angular.module("myApp", [])
	.controller("MainController", ["$scope", "cartoonStorage", function ($scope, cartoonStorage) {
		$scope.addToon = function (toon) {
			cartoonStorage.addCartoon(toon);
			$scope.toon = "";
			$scope.lists = cartoonStorage.newToons();
			console.log(lists);
		}

}])

.service("cartoonStorage", [function () {
	var cartoons = [];
	this.addCartoon = function (toon) {
		cartoons.push(toon);
		return cartoons;
	}
	this.newToons = function(){
		return cartoons;
	}

}])