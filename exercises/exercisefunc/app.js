function addTwo(a, b) {
    return a + b;
}

function largeNum(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


function stringHalf(str) {
    if (str.length <= 20) {
        console.log(str + " " + str);
    } else {
        var newStr = str.substr(0, str.length / 2)
        console.log(newStr);
    }
}

stringHalf("Here is a string hope this is long enought to work on the other");


function fibNum(num) {
    var lastNum = 0;
    var currNum = 1;
    var result = 0;
    var counter = 0;
    while (counter < num - 1) {
        result += currNum;
        console.log(currNum);
        currNum += lastNum;
        lastNum = currNum - lastNum;
        counter++;
    }

    return result;
}

// test here
console.log(fibNum(12));