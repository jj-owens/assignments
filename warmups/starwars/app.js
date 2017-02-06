var app = angular.module("App", []);
var audio = document.getElementById("sound");
app.controller("MainController", ["$scope", "$http", function($scope, $http){
    $http.get("http://swapi.co/api/films/1/").then(function (response){
        $scope.data = response.data;
        $scope.text = $scope.data.opening_crawl;
        sound.play();
    }
    
    )
}]);

