var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var tempStr = "";
var startStr = "";

function ceaser(input) {
    newString = startStr.split('');

    for (var i = 0; newString.length; i++) {
        var countLetter = newString.charCodeAt(0);
        if (countLetter < 65 || countLetter > 90) {
            tempStr = String.fromCharCode(countLetter);
            startStr += tempStr;
        } else if (countLetter < 78) {
            tempStr = String.fromCharCode(countLetter + shift);
            startStr += tempStr;
        }
        tempStr = String.fromCharCode(countLetter - shift);
        startStr += tempStr;
    }
    startStr.join('');
    console.log(startStr);
}

ceaser(input);