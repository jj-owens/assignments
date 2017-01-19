function alertMe() {
    var form = document.getElementById("myForm").elements;
    var fname = form["firstname"].value;
    var lname = form["lastname"].value;
    var formAge = form["age"].value;
    var gender = form["gender"].value;
    var travelTo = form["locations"].value;
    var none = form["none"].checked;
    var pescatarian = form["pescatarian"].checked;
    var vegetarian = form["vegetarian"].checked;
    var vegan = form["vegan"].checked;
    var peanuts = form["peanuts"].checked;
    var shellfish = form["shellfish"].checked;
    var gluten = form["gluten"].checked;
    var restrictions = "";

    if (none) {
        restrictions += "No dietary restrictions.";
    }
    if (pescatarian) {
        restrictions += "Pescatarian ";
    }
    if (vegetarian) {
        restrictions += "Vegetarian ";
    }
    if (vegan) {
        restrictions += "Vegan ";
    }
    if (peanuts) {
        restrictions += "Peanuts ";
    }
    if (shellfish) {
        restrictions += "Shellfish ";
    }
    if (gluten) {
        restrictions += "Gluten";
    }

    alert("First name: " + fname + "\rLast name: " + lname + "\rAge: " + formAge + "\rGender: " + gender + "\rTravel location: " + travelTo + "\rDietary restrictions: " + restrictions);
}