var newString = "";

function antiCaps(str) {

    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i]) === true) {
            newString += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
        }
    }

}

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

antiCaps("There Is No Spoon");
console.log(newString);