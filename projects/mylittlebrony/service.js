angular.module("myApp")
	.service("MainService", ["$http", function ($http) {
		var re = /^[A-Za-z]+$/;
		var self = this;
		this.addPony = function (input) {
			return $http.post("http://api.vschool.io/jjowens/pony", input).then(function (response) {
				alert("Added Pony to Collection!");
				return response.data;
			});
		}

		this.delPony = function (id) {
			return $http.delete("http://api.vschool.io/jjowens/pony/" + id).then(function (response) {
				return response.data;
			});
		};
		this.getFavList = function () {
			return $http.get("http://api.vschool.io/jjowens/pony").then(function (response) {
				return response.data;
			});
		};
		this.ponyValidator = function (input) {
			$http.get("http://api.vschool.io/jjowens/pony").then(function (response) {
				var ponyList = response.data;
			});
			if (Object.keys(input).length < 3) {
				return alert("Incomplete Pony Information!");
			} else if (input.name.length < 3) {
				return alert("Pony name must be at least 3 letters!");
			} else if (re.test(input.name) != true) {
				return alert("Pony name cannot contain numbers!");
			} else {
				return self.addPony(input);
			}
		};
}]);