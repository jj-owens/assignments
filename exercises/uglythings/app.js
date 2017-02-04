var app = angular.module("uglyApp", []);

app.controller("MainController", ['$scope', function($scope){
    $scope.itemArray = [];
        $scope.addItem = function (item){
            $scope.itemArray.push(item);
            console.log($scope.itemArray);
            $scope.item = {};
        }
    
}]);