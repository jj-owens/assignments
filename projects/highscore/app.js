var submitCount = 1;
var scoreArray = [];
var temp = JSON.parse(localStorage.getItem("newScore"));
console.log(temp);
$('#scoreTable').append(`<tr><td>${temp.firstName}</td><td>${temp.lastName}</td><td>${temp.gameName}</td><td>${temp.highScore}</td><td>${temp.email}</td><td>${temp.date}</td><td>${temp.trash}</td></tr>`);


$(document).ready(function () {
    $('#scoreTable').DataTable({
        paging: false,
        stateSave: true,
        searching: false,
    });
});

function formSubmit() {
    var inputData = document.getElementById("formData").elements;
    var firstName = inputData["firstNameInput"].value;
    var lastName = inputData["lastNameInput"].value;
    var gameName = inputData["gameInput"].value;
    var highScore = inputData["scoreInput"].value;
    var email = inputData["emailInput"].value;
    var date = inputData["dateInput"].value;
    var trash = document.querySelector('.form-check-input:checked');
    trash = "off";
    if (trash.value == "on") {
        var trashTalk = ["Is that all you've got?",
                         "I've seen better scores from a rat!",
                         "There is no spoon.",
                        "Get out of my house!",
                        "Too easy.",
                        "Pwnd!",
                        "I own you bro!",
                        "Peace, son!",
                        "Talk to the hand..",
                        "It gets no better, I'm too clean!"];
        var roll = Math.floor(Math.random() * (10 - 0) + 0);
        trash = trashTalk[roll];
    } else {
        trash = "This is my new score.";
    }
    var submittedScore = new NewScore(firstName, lastName, gameName, highScore, email, date, trash);
    scoreArray.push(submittedScore);
    localStorage.setItem("newScore", JSON.stringify(scoreArray));
    $('#scoreTable').append(`<tr><td>${submittedScore.firstName}</td><td>${submittedScore.lastName}</td><td>${submittedScore.gameName}</td><td>${submittedScore.highScore}</td><td>${submittedScore.email}</td><td>${submittedScore.date}</td><td>${submittedScore.trash}</td></tr>`);
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