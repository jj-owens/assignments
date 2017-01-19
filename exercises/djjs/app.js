function colorChange() {
    document.getElementById("colorblock").className = "colorblock2";
}

function colorRestore() {
    document.getElementById("colorblock").className = "colorblock";
}

function colorChange2() {
    document.getElementById("colorblock").className = "colorblock3";
}

function colorChange3() {
    document.getElementById("colorblock").className = "colorblock4";
}

document.addEventListener("wheel", colorChange3);
document.addEventListener("keydown", function (event) {
    if (event.which == 66) {
        document.getElementById("colorblock").className = "toBlue";
    } else if (event.which == 82) {
        document.getElementById("colorblock").className = "toRed";
    } else if (event.which == 89) {
        colorChange();
    } else if (event.which == 71) {
        colorChange2();
    } else if (event.which == 79) {
        colorChange3();
    }
    console.log(event.which);
});