var newDate = new Date();
var day = newDate.getDay();
var hour = newDate.getHours();
var minutes = newDate.getMinutes();
var seconds = newDate.getSeconds();
var amPm = ""
if (hour > 12) {
    amPm = "PM";
} else {
    amPm = "AM";
}
switch (day) {
case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day = "Thursday";
    break;
case 5:
    day = "Friday";
    break;
case 6:
    day = "Saturday";
}

console.log("Today is: " + day);
console.log("Current time is: " + hour + ":" + minutes + ":" + seconds + " " + amPm)