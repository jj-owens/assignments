var app = angular.module("App", []);
app.controller("MainController", ["$scope", "$http", function($scope, $http){
    var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};
    $scope.translate = function(yoda){
$http.get("https://yoda.p.mashape.com/yoda?sentence=" + yoda.yodaSentence, config).then(function(response){
    $scope.newText = response.data;
});
    };
    
}]);