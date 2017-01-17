var readLinesync = require('readline-sync');
var name = readLinesync.question("Hello there, what is your name? ");
var age = readLinesync.question("How old are you? ");
var job = readLinesync.question("What do you do for  living? ");
console.log("Hello " + name.toUpperCase() + ". You sure do look funny for being " + age.toUpperCase() + " years old!" + " Also, working as a " + job.toUpperCase() + " is kind of dead end job for your age isn't it? Anyway....");
var fingers = readLinesync.question("How many fingers do you have? ");
if (fingers < 10) {
    console.log("Picked your nose too deep and got lost, eh? Tsk..");
} else if (fingers > 10) {
    console.log("What the..f-....moving on...");
} else {
    console.log("That's good, I'm sure you need them all to count...");
}
var shoe = readLinesync.question("Is there anything stuck to the bottom of your shoe? ");
if (shoe == "yes") {
    console.log("Somehow I don't doubt that...");
} else if (shoe === "no") {
    console.log("Somehow I doubt that...");
} else {
    console.log("It's a simple question...but since that's over your head..");
}
var dream = readLinesync.question("What did you dream about last night? ");
var short = dream.length / 2;
var dreamReapeat = dream.substr(short, dream.length);

console.log("So you dreamed something about " + dreamReapeat.toUpperCase() + ".... that is a really weird dream, but coming from you that's not surprising! Alright, I'm outa here...");