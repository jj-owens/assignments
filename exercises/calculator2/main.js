function runCalc(num1, num2, string) {
	this.num1 = num1;
	this.num2 = num2;
	this.operation = string;

	var add = require("./sum");

	if (operation == "add") {
		add(num1, num2);
	}

	var subtract = require("./minus");
	if (operation == "subtract") {
		subtract.minus(num1, num2);
	}

	var divide = require("./divide");
	if (operation == "divide") {
		divide.div(num1, num2);
	}
	var multiply = require("./product");
	var mult = new multiply(num1, num2);
	if (operation == "multiply") {
		mult.mult(num1, num2);
	}
	var powers = require("./power");
	if (operation == "power") {
		powers.toPower(num1, num2);
	}

}

runCalc(2, 5, "add");

a = 1;
b = 2;

function add(a, b){
	return a + b;
}

add(a, b);


function add(a, b){
	return a + b;
}


add(1, 2)






