var numArray = [];

function fixTeenStart(a, b, c) {
    filterNum(a);
    filterNum(b);
    filterNum(c);
}

function filterNum(num) {
    if (num < 13) {
        numArray.push(num);
    } else if (num > 19) {
        numArray.push(num);
    } else {
        fixTeen(num);
    }
}

function fixTeen(n) {
    if (n == 15) {
        numArray.push(n);
    } else if (n == 16) {
        numArray.push(n);
    } else {
        n = 0;
        numArray.push(n);
    }
}

var solution = numArray[0] + numArray[1] + numArray[2];
console.log();


fixTeenStart(1, 2, 3);
fixTeenStart(2, 13, 1);
fixTeenStart(2, 1, 14);
fixTeenStart(2, 15, 14);