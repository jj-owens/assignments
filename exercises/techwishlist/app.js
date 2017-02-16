angular.module("myApp", ["ngRoute"])

.config(function ($routeProvider) {
	$routeProvider
		.when("/phonecomp", {
			templateUrl: "phonecomp/phonecomp.html"
		})
//		.when("/othertech", {
			//			templateUrl: "othertech/othertech.html"
			//		});

})

.directive("myTech", function () {
	return {
		restrict: "E",
		scope: {
			techInfo: "="
		},
		templateUrl: "phonecomp/my-tech.html"
	};
})