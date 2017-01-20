/*Given the following code:

    var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

1. What will fruits[1] be ? Orange

2. What would fruits.length be ? 5


3. What would fruits.indexOf(“Mango”) be ? 3

Given the following object:

    var car = {
        brand: “Honda”,
        model: “Civic”,
        numberOfDoors: 4,
        automatic: true,
        color: “blue”,
        miles: 0,
        driveOneMile: function () {
            this.miles++;
            return this.miles;
        }
    };

4. How would we print the color of our car ? console.log(car.color)

5. How would we add a property“ passengers” to our car and give it a value of 5 ?

    6. What would get printed to the console
if we ran the following code ? Bob, Joe

var name = “Joe”;

function printName() {
    var name = “Bob”
    return name;
}

console.log(printName());
console.log(name);

7. This is because name = “Joe” is a ________ variable Global

Local
Outer
Global
Inside

8. And name = “Bob” is a _________ variable Local

Local
Outer
Global
Inside

9. What would get printed to the console
if we ran the following code ? Bob, Bob

var name = “Joe”;

function printName() {
    name = “Bob”
    return name;
}

console.log(printName());
console.log(name);


10. This is because we are printing out the __________ variable twice Global

Local
Outer
Global
Inside

11. What will the following log to the console ? It is true

if ((1 < 2) && (2 * 3 < 6 || false || 9 > 6)) {
    console.log("It is true!")
} else {
    console.log("It is false!")
}

12. Write a
for loop that will print every string in the array:

    fruits = [“apple”, “pear”, “chicken”, “banana”]

Remember to make it so it works no matter how long the array is!


    for (var i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }


13. What JavaScript data type will the variable“ thingFromClass” be
if we have the following: HTML Element

var thingFromClass = document.getElementsByClassName(“thing - from - class”);

String
Object
Array
HTML Element

14. If I want to center a bootstrap column that is 8 columns wide, how many columns must I offset it ? offset - 2

    < div class = "col-xs-8 col-xs-offset-6" >
    < div class = "col-xs-8 col-xs-offset-4" >
    < div class = "col-xs-8 col-xs-offset-2" >
    < div class = "col-xs-8 col-xs-offset-1" >



    HEAVY CODE WRITING AHEAD!!!

    Big Problem #1

Given the following HTML

<form id=” user - form” >
    < input type = ”text” name = ”first - name” id = ”first - name - input” / >
    < button type = "button"
id = "submit-button" > Submit < /button> < /form > < span id = ”output” > < /span>

Write JavaScript to get the value of the input box, remove any vowels, and then output the new, no vowel string to the span.

var inputBox = document.getElementById("user-form").elements["first-name"].value;
for (var i = 0; i < inputBox.length; i++) {
    if (inputBox[i] == "a" || "e" || "i" || "o" || "u") {
        inputBox.splice(inputBox[i]);
    }

}
document.getElementById("output").innerHTML = inputBox;




Big Problem #2

Write a constructor function that will make a “building” object where you can pass in the name of the building, the building’s color, and if the building has a garage (Boolean). The object would also have a default giving it a kitchen (also a Boolean). 

Instantiating an object from the constructor would look like:

var myBuilding = new Building(“Fun House”, “red”, false)

The object would look like:

    myBuilding = {
        name: “Fun House”,
        color: “red”,
        hasGarage: false,
        hasKitchen: true
    }*/

function Building(name, color, garage) {
    this.name = name;
    this.color = color;
    this.garage = garage;
    this.kitchen = true;
}

var myBuilding = new Building("fun house", "red", false);
console.log(myBuilding);