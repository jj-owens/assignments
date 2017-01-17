function add() {
    var num1 = document.getElementById("addBox1").value;
    var num2 = document.getElementById("addBox2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("totalBox").innerHTML = num1 + num2;
}

function sub() {
    var num1 = document.getElementById("subBox1").value;
    var num2 = document.getElementById("subBox2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("totalBox").innerHTML = num1 - num2;

}

function mult() {
    var num1 = document.getElementById("multBox1").value;
    var num2 = document.getElementById("multBox2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById("totalBox").innerHTML = num1 * num2;
}

function clearNums() {
    document.getElementById("totalBox").innerHTML = "";
    document.getElementById("addBox1").value = "";
    document.getElementById("addBox2").value = "";
    document.getElementById("subBox1").value = "";
    document.getElementById("subBox2").value = "";
    document.getElementById("multBox1").value = "";
    document.getElementById("multBox2").value = "";
}