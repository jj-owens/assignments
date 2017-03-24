var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyparser = require("body-parser");
var port = process.env.PORT || 8000;
app.use(morgan("dev"));
app.use(bodyparser.json());



mongoose.connect("config.database", function (err) {
	if (err) throw err;
	console.log("connected to the database");
});

app.get("/", function (req, res) {
	res.send("working");
});

app.listen(port, function () {
	console.log("Server listening on port 8000");
})