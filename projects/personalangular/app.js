angular.module("TwitchApp", ["ngRoute"])
	.controller("IndexController", ["$scope", function ($scope) {
		$scope.hello = "Hello World";
}])

.config(function ($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "/main/main.html"
		})
})

.controller("indexController", ["$scope", function ($scope) {
	$scope.getUser = function (user) {
		$scope.username = user;

	}
}])