function noDupes(string) {
    //lowecase the letters
    //create an empty atring for unique letters
    //create an epty string for the duplicates
    //loop through each letter in the lowecase string
    //check if the current letter is already in the unique letter string
    //put it in the duplicates string
    //else
    //put it in the unique letters string
    //console log both strings

    var uniques = "";
    var duplicates = "";

    for (var i = 0; i < string.length; i++) {
        if (uniques.indexOf(string[i]) !== -1) {
            duplicates += string[i];
        } else {
            uniques += string[i];
        }

    }

    console.log("No duplicates: " + uniques);
    console.log("Duplicates: " + duplicates);

}

noDupes("bookkeeper larry");