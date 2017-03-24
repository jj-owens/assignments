var countDownDate = new Date("Mar 15, 2017 22:31:00").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	console.log(distance);
	if (distance <= 0) {
		clearInterval(x);
		openVideo('cena.mp4', 'cena.jpg');
	}
}, 1000);


function openVideo(file, poster) {
	document.getElementById("timer").innerHTML = "<video class='right' width='1280' height='720' autoplay poster='" + poster + "'><source src='" + file + "' type='video/mp4'>Your browser does not support the video tag.</video>"
	document.getElementById("body").innerHTML = "<video class='right' width='1280' height='720' autoplay poster='" + poster + "'><source src='" + file + "' type='video/mp4'>Your browser does not support the video tag.</video>"
}
// call using the following format