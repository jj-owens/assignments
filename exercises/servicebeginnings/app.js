angular.module("myApp", [])
    .controller("MainController", ["$scope", "pokeService", function ($scope, pokeService) {
        $scope.pokemons = [];
        $scope.addPokemon = function (name) {
            pokeService.getImageData(name).then(function (sprites) {
                $scope.pokemons.push({
                    name: name.toUpperCase(),
                    images: sprites
                });
            });
        }
        $scope.remPokemon = function (input) {
            for (var i = 0; i < $scope.pokemons.length; i++) {
                if ($scope.pokemons[i].name === input.toUpperCase()) {
                    $scope.pokemons.splice(i, 1);
                }
            }
        }

}])

.service("pokeService", ["$http", function ($http) {

    this.getImageData = function (name) {
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + name).then(function (response) {
            return response.data.sprites
        })

    }
}])