var goombaNum = 0;
var cheepNum = 0;
var ombNum = 0;
var goombaPrice = 5;
var ombPrice = 11;
var cheepPrice = 7;
var totalPrice = 0;


function addGoomba() {
    goombaNum++;
    document.getElementById("badAdd3").innerHTML = goombaNum;
    //totalPrice += goombaNum * goombaPrice;
}

function addBobOmbs() {
    ombNum++;
    document.getElementById("badAdd1").innerHTML = ombNum;
}

function addCheepCheeps() {
    cheepNum++;
    document.getElementById("badAdd2").innerHTML = cheepNum;
}

function getTotal() {
    totalPrice = (goombaNum * goombaPrice) + (cheepNum * cheepPrice) + (ombNum * ombPrice);
    document.getElementById("calculatedText").innerHTML = totalPrice;
}