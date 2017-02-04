// this function proves the length of input will result in how many arrays are passed to a function.
function someFunc(input) {
    console.log(input.length);
    console.log(input);
}

someFunc([[1, 2, 3], [3, 3, 5, 6, 8], [3, 2, 4]]);

/////////////////////////////////

var letterCount = 0;
var arrayNumber = 0;

for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
    for (var j = 0; j < input[i].length; j++) {
        console.log(input[i][j]);

    }
}




//////////////// Miriam code below:

function findUniques() {
    var uniques = [];
    var dupes = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {

            if ((uniques.indexOf(arguments[i][j]) === -1) && (dupes.indexOf(arguments[i][j]) === -1)) {
                uniques.push(arguments[i][j]);
            } else if (uniques.indexOf(arguments[i][j]) >= 0) {
                var index = uniques.indexOf(arguments[i][j]);
                uniques.splice(index, 1);
                dupes.push(arguments[i][j]);
            }
        }
    }
    return uniques;
}