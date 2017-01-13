function sing(lyrics) {
    var string = ""
    for (var i = 0; i < lyrics.length; i++) {
        string += lyrics[i] + " ";
    }
    console.log(string);
};

function singBackwards(lyrics) {
    var string = ""
    for (var i = lyrics.length - 1; i >= 0; i--) {
        string += lyrics[i] + " ";
    }
    console.log(string);
};








/*
function singBackwards(lyrics) {
    var string2 = lyrics.reverse().join(" ");
    console.log(string2);
}

function badPerformance(lyrics) {
    var string3 = lyrics.join(" ");
    for (var i = 0; i < lyrics.length; i++) {
        newStr = newStr.concat(string3[i]);
    }
    console.log(newStr);
}

*/


sing(["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"]);

singBackwards(["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"]);

/*badPerformance(["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"]);*/