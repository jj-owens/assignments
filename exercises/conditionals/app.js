function lowestNum(num1, num2) {
    if (num1 > num2) {
        console.log(num2);
    } else if (num1 < num2) {
        console.log(num1);
    } else if (num1 == num2) {
        console.log("Numbers are equal!!");
    }
}
lowestNum(10, 15);



function monkeyBusiness(aSmile, bSmile) {
    if (aSmile && bSmile == true) {
        console.log("Uh oh! We're in trouble!");
    } else if (aSmile == true && bSmile == false || aSmile == false && bSmile == true) {
        console.log("The monkey's are in a good balance!");
    } else if (aSmile == false && bSmile == false) {
        console.log("Oh no! The monkeys are coordinating! We're in trouble!");
    }
}

monkeyBusiness(true, true)
monkeyBusiness(false, false)
monkeyBusiness(true, false)


function greeting() {
    var today = new Date();
    if (today.getHours() < 12) {
        console.log("Good Morning!")
    } else if (today.getHours() > 12 && today.getHours() < 5) {
        console.log("Good Afternoon");
    } else if (today.getHours() > 5) {
        console.log("Good Evening!");
    }
}

greeting();