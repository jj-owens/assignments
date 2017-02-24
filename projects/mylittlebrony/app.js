var app = angular.module("myApp", ["ngRoute"]);

app.controller("MainController", ["$scope", "$route", "MainService", function ($scope, $route, MainService) {

	MainService.getFavList().then(function (data) {
		$scope.ponies = data;
	});

	$scope.delBtn = function (id) {
		MainService.delPony(id).then(function (data) {
			MainService.getFavList().then(function (data) {
				$scope.ponies = data;
			});

		});

		$route.reload();
	};
	$scope.submitForm = function (form) {
		alert("Submitting Pony!");
		MainService.ponyValidator(form).then(function (response) {
			MainService.getFavList().then(function (data) {
				$scope.ponies = data;
				window.location.replace("#!/ponies");
				$route.reload();
			});
		});

	}

}])
app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "land.html"
		})
		.when("/home", {
			templateUrl: "home.html"
		})
		.when("/ponies", {
			templateUrl: "ponies.html"
		});
});