var gameBoard = [];
var gameRow = [];
var newLoc = require("./main")
function newGameBoard(){
	for (var i = 0; i < 10; i++){
		gameRow.push(new newLoc);
		for (var j = 0; j < 1; j++){
			gameBoard.push(gameRow);
		}
	}
	console.log(gameBoard);
	console.log(gameBoard.length);
}

newGameBoard();