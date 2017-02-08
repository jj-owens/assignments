angular.module("myApp", [])
.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService){
   $scope.pokemons = [];
    console.log($scope.pokeName);
    
$scope.addPokemon = function (name) {
        
        console.log($scope.pokemons);
        pokeService.getImageData(name).then(function(sprites){
    $scope.pokemons.push({name: name.toUpperCase(), images: sprites});
    });
    }
}])

.service("pokeService", ["$http", function($http){
    
    this.getImageData = function(name){
    return $http.get("http://pokeapi.co/api/v2/pokemon/" + name).then(function(response){
        return response.data.sprites;
    })
        
}
}])

