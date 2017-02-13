function toPower(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;
	console.log(Math.floor(Math.pow(num1, num2)));
}

 module.exports = {
	 toPower: toPower
 }