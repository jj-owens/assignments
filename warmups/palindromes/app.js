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



palindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");