var app = angular.module("ToDo", []);
app.controller('MainController', ['$scope', '$http', function ($scope, $http, $log) {

    $scope.addButton = function (newItems) {
        var url = 'http://api.vschool.io/jayowens/todo';
        //        var newItem = [];
        //        newItem.push(newItems);
        //        console.log(newItem);
        $http.post(url, newItems).then(function () {
            alert("Information Posted");
            $scope.items = $http.get('http://api.vschool.io/jayowens/todo').then(function (response) {
                $scope.todoList = response.data;
                console.log(response);
            });
        });
    };
}]);