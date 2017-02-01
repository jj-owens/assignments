var app = angular.module("MyApp", []);

app.controller("MainController", function ($scope) {
    console.log("Hi There");
    $scope.name = "name";
    $scope.person = {
        firstname: "Simon",
        lastname: "Phoenix"
    }
    $scope.nums = [1, 2, 3, 4];
});