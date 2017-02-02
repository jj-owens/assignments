var app = angular.module('hitList', []);
app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    var url = 'http://api.vschool.io:6543/hitlist.json';
    $http.get(url).then(function (response) {
        $scope.arr = response.data;
        console.log(response.data)
    });
}]);