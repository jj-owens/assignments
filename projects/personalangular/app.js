var app = angular.module("TwitchApp", ["ngRoute"]);

app.config(function ($routeProvider, $sceDelegateProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "./main/main.html",
			controller: "mainController"
		})
	$sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.controller("mainController", ["$scope", "indexService", function ($scope, indexService) {
	var username = [];
	$scope.getUser = function (user) {
		username.push(user);
		alert("Grabbing channels for " + username);
		indexService.getData(username);
		$scope.userFavorites = indexService.urlArr;
	}


}]);

app.service("indexService", ["$http", function ($http) {
	var self = this;
	this.channelArr = [];
	this.urlArr = [];
	this.getData = function (username) {
		$http.get("https://api.twitch.tv/kraken/users/" + username + "/follows/channels?client_id=1e86nkbswr0q12g7smr5fw495sysbi").then(function (response) {

			for (var i = 0; i < response.data.follows.length; i++) {
				self.channelArr.push(response.data.follows[i].channel.name);

			}
			for (var i = 0; i < self.channelArr.length; i++) {
				self.urlArr.push("http://player.twitch.tv/?channel=" + self.channelArr[i]);
			}
			console.log(self.urlArr);
		});
	}

}]);