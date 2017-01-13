var num = 0;
for (var i = 0; i <= 101; i++) {
    console.log(num + i);
    if ((num + i) % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}