angular.module("myApp", [])

.controller("MainController", ["$scope", "MainService", function ($scope, MainService) {
	MainService.getIssue().then(function (data) {
		$scope.issueList = data;
	});

	$scope.postIssue = function (issue) {
		MainService.postIssue(issue).then(function (data) {
			$scope.issueList = data;
			$scope.issue = {};
		});
	};
	$scope.upvote = function (id) {
		MainService.upvote(id).then(function (data) {
			$scope.issueList = data;
		});
	};
	$scope.downvote = function (id) {
		MainService.downvote(id).then(function (data) {
			$scope.issueList = data;
		});
	};



}])


.service("MainService", ["$http", function ($http) {
	var self = this;
	this.getIssue = function () {
		return $http.get("/vote").then(function (response) {
			return response.data;
		});
	}
	this.postIssue = function (issue) {
		return $http.post("/vote", issue).then(function (response) {
			alert("Issue successfully posted!");
			return self.getIssue();
		});
	}
	this.upvote = function (id) {
		return $http.post("/vote/upvote/" + id, id).then(function (response) {
			return self.getIssue();
		});
	}
	this.downvote = function (id) {
		return $http.post("/vote/downvote/" + id, id).then(function (response) {
			return self.getIssue();
		});
	}

}])