var input = "What is the string you would like to try?";

function printLetters(input) {
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }

}

printLetters(input);







function newFun(str, char) {
    var isFound = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            console.log(char + " has been found at position " + i);
            isFound++;
        }
    }
    if (isFound == 0) {
        console.log(char + " has not been found");
    }

}

newFun("hello world", "o");


function no42(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 42) {
            console.log(42 + " was found, exiting...");
            break;
        }
        console.log(arr[i]);
        if (i == arr.length - 1) {
            console.log("42 was not found!");
        }
    }

}

no42([0, 2, 0, 4, 16, 19, 41, 52, 67, 15, 95, 23]);



function lowNum(arr1) {
    arr1.min = function (arr1) {
        return Math.min.apply(Math, arr1);
    };
    var minimum = arr1.min(arr1);
    console.log(minimum);
}

lowNum([3, 5, 10, 5, 7, 6, 7, 4, 8, 7]);