var mongoose = require("mongoose");
var Scheema = mongoose.Schema;
var userSchema = new Scheema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		//match: REGEX ----this would allowe to put restrictions on password chars

	},
	admin: {
		type: Boolean,
		default: false
	}
})