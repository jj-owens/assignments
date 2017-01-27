function Parties(name, population) {
    this.name = name;
    this.population = population;
}

var penguins = new Parties("Penguins", 1000000);
var communists = new Parties("Communists", 1000000);
var firstTurn = "";
var count = 0;

function coinFlip() {
    var flip = Math.floor(Math.random() * (3 - 0) + 0);
    if (flip == 1) {
        console.log("The Communists go first!!");
        firstTurn += "communists";
    } else {
        console.log("The Penguins go first!!");
        firstTurn += "penguins";
    }
}
coinFlip();

function onHit(party) {
    var roll = Math.floor(Math.random() * (100000 - 5000) + 5000);
    party.population -= roll;
    console.log("The " + party.name + " have lost " + roll + " of the population!!! They have " + party.population + " left!!");
}

function onMiss(party) {
    console.log("The nuke missed! The " + party.name + " still have " + party.population + " population!!!");
}

function sendNuke(party, onHit, onMiss) {
    var roll = Math.floor(Math.random() * (4 - 1) + 1);
    if (roll > 2) {
        return onHit(party);
    } else {
        return onMiss(party);
    }
}

var war = setInterval(function () {
    warWhile()
}, 200);

function warWhile() {
    if (penguins.population < 0) {
        return clearInterval(war);
    } else if (communists.population < 0) {
        return clearInterval(war);
    } else if (count % 2 == 0) {
        sendNuke(penguins, onHit, onMiss);
    } else {
        sendNuke(communists, onHit, onMiss);
    }
    count++;
}