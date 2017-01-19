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

document.getElementById("bodyId").addEventListener("wheel", colorChange3);