var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var voteSchema = new Schema({
	title: String,
	info: String,
	upvotes: Number,
	downvotes: Number
});


var Vote = mongoose.model("Vote", voteSchema);
module.exports = Vote;