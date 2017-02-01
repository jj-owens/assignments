var app = angular.module("myApp", []);

app.controller("mainController", function ($scope) {
    console.log("Did this work?");
    $scope.text = "Hey what is this";

});