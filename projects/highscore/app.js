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
var inputData = document.getElementsByClassName("form-group");
var firstName = inputData[0];
var lastName = inputData[1].value;
var gameName = inputData[2].value;
var highScore = inputData[3].value;
var email = inputData[4].value;
var date = inputData[5].value;
console.log(firstName);
var trash = document.querySelector('.form-check-input:checked');

function formSubmit() {
    var submittedScore = new NewScore(firstName, lastName, gameName, highScore, email, date, trash)
    localStorage.setItem("newScore", JSON.stringify(submittedScore));
    return console.log(submittedScore);
}


function NewScore(firstname, lastname, gamename, highscore, email, date, trash) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.gamename = gameName;
    this.highscore = highScore;
    this.email = email;
    this.date = date;
    this.trash = false;
}
