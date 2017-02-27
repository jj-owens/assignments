var express = require("express");
var app = express();
var uuid = require("uuid/v4");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rockthevote', function (err) {
	if (err) throw err;
	else console.log("connected to database");
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());
var vote = require("./models/models");
app.use("/", require("./routes/voteroutes"));
app.use(express.static(path.join(__dirname))); //this is pointing at index.html and path.join is correcting for mac vs pc dir structure
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.listen(8080, function () {
	console.log("Server listening on port 8080..");
});