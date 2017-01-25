/*// Save something to web storage:
localStorage.setItem('key', 'value');

// Get something from web storage that  was previously saved:
var myValue = localStorage.getItem('key');

// Remove an key/value pair from localStorage:
localStorage.removeItem('key');

/!*It's important to keep in mind that web storage only stores strings of data. ' +
'So if you need to store or retrieve more complex data types, you can use JSON.stringify() ' +
'to turn complex data into a string before saving it to web storage or JSON.parse() to turn something ' +
'back into a complex data type before trying to display or manipulate it.*!/*/
/*var inputData = document.getElementById("formData");
var firstName = inputData.elements["firstNameInput"].value;
var lastName = inputData[1].value;
var gameName = inputData[2].value;
var highScore = inputData[3].value;
var email = inputData[4].value;
var date = inputData[5].value;
console.log(inputData);
console.log(firstName);
var trash = document.querySelector('.form-check-input:checked');*/

function formSubmit() {
    var inputData = document.getElementById("formData").elements;
    var firstName = inputData["firstNameInput"].value;
    var lastName = inputData["lastNameInput"].value;
    var gameName = inputData["gameInput"].value;
    var highScore = inputData["scoreInput"].value;
    var email = inputData["emailInput"].value;
    var date = inputData["dateInput"].value;
    console.log(inputData);
    console.log(firstName);
    var trash = document.querySelector('.form-check-input:checked');

    var submittedScore = new NewScore(firstName, lastName, gameName, highScore, email, date, trash)
    localStorage.setItem("newScore", JSON.stringify(submittedScore));
    $('scoreTable tr:last').after('<tr><td>my data</td><td>more data</td></tr>');
}


function NewScore(firstname, lastname, gamename, highscore, email, date, trash) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.gameName = gamename;
    this.highScore = highscore;
    this.email = email;
    this.date = date;
    this.trash = trash;
}


