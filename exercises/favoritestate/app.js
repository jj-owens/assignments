angular.module("StateApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .when("/love", {
            templateUrl: "love/love.html",
            controller: "LoveController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}])