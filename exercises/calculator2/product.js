function multiply(num1, num2){
	this.num1 = num1
	this.num2 = num2
	this.mult = function(num1, num2){
		console.log(num1 * num2);
	}
}

module.exports = multiply;