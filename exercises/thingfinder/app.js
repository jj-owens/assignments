var express = require("express");
var uuid = require("uuid/v4")
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var phones = [{
		"name": "Samsung",
		"model": "s5",
		"price": "$400"
},
	{
		"name": "iPhone",
		"model": "s6",
		"price": "$800"
	}];


app.get("/phones", function (req, res) {
	console.log(phones);
	res.send(req.query);
});


app.listen(8383, function () {
	console.log("Server listening on port 8383");
});