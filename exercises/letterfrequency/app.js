function getFrequency(str) {
    var count = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str.charAt(i);
        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }
    }
    return count;
}

console.log(getFrequency("slimy smelly solution"));