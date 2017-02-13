function newDivide(num1, num2){
	this.num1 = num1;
	this.num2 = num2;
	this.div = function(num1, num2){
		console.log(num1 / num2);
	}
}
module.exports = new newDivide();
