var app = angular.module("myApp", []);


app.controller("bodyController", function ($scope) {
    $scope.newPerson = [];
    $scope.newNameTag = function (info) {

        $scope.newPerson.push(info);

        console.log($scope.newPerson);
        $scope.person = {};
    };

});