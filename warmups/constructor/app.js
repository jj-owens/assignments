var brand = "Apple"; // THESE ARE GLOBAL VARIABLES
var model = "iPhone 6";
var owner = "Jay";
var price = "$999";

function Cellphone(a, b, c, d) { // THE A, B, C, AND D ARE VARIABLES THAT GET THEIR VALUE WHEN YOU CALL THE FUNCTION
	this.brand = a; // THIS.BRAND IS THE NEW OBJECT PROPERTY, THE A IS THE PROPERTY VALUE
	this.model = b; // THIS.MODEL IS THE NEW OBJECT PROPERTY CALLED MODEL, AND THE B IS THE PROPERTY VALUE
	this.owner = c; // ETC ETC
	this.price = d;
	this.color = "blue"; // THESE ARE HARDCODED VALUES FOR EACH PROPERTY.."BLUE" IS THE VALUE, "COLOR" IS THE PROPERTY
	this.shape = "A wild Jayandathehutt";
	this.sucks = false;
}


var phone = new Cellphone(brand, model, owner, price) // THIS IS HOW YOU CREATE THE NEW FUCTION WITH THE "NEW" SYNTAX, AND YOU ARE PASSING DATA INTO EACH PARAMETER SLOT. IN THIS CASE IT IS REFERRING TO THE GLOBAL VARIABLES.

console.log(phone); // CONSOLE LOGGING THE NEW OBJECT WE CREATED!!! WOOHOOO!