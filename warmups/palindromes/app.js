/*
function palindrome(str) {
    // Good luck!
    var lowerCaseString = str.toLowerCase();
    var noSymbolsString = lowerCaseString.replace(/[\W_]/g, '');
    var reverseString = noSymbolsString.split('').reverse('');
    var joinString = reverseString.join('');
    if (joinString === noSymbolsString) {

        return console.log(true);

    } else {
        return console.log(false);
    }
}

*/


////updated code below.

function palindrome(str) {
    var newStr = str.replace(/[\W_]/g, '').toLowerCase();
    console.log(newStr == newStr.toLowerCase().split('').reverse('').join(''));
}

palindrome("A Toyota! Race fast, safe car! A Toyota!");

//returns true if palindrome, and false if not a palindrome.