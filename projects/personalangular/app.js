angular.module("TwitchApp", ["ngRoute"])
.controller("IndexController", ["$scope", function($scope){
	$scope.hello = "Hello World";
}])

//.config(function ($routeProvider) {
//	$routeProvider
//	.when("/", {
//		templateUrl: "index.html"
//	})
//})
