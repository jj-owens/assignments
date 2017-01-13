/*
var input = "bookkeeper larry";
var splitInput = [];
var leftOverLetters = [];

function removeDuplicates() {
    splitInput.push(input.replace(" ", "").split(""));

    for (var i = 0; i < splitInput.length; i++) {

    }
    console.log(splitInput.toString());
};







removeDuplicates(input);
*/

function unique(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) < 0) {
            result += str[i];
        }
    }
    return result;
}

console.log(
    unique('abcdab'),
    unique('aaabbc')
);