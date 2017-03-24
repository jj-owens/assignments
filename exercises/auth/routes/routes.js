var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true,
		default: false
	}
});