var express = require("express");
var app = express();
var uuid = require("uuid/v4");
var bodyParser = require("body-parser");
var path = require("path");
var voteItems = [];
var upvotes = 0;
var downvotes = 0;

app.use(express.static(path.join(__dirname))); //this is pointing at index.html and path.join is correcting for mac vs pc dir structure

app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.listen(8080, function () {
	console.log("Server listening on port 8080..");
});

app.get("/vote", function (req, res) {
	res.send(voteItems);
});
app.post("/vote", function (req, res) {
	req.body.id = uuid();
	req.body.upvotes = 0;
	req.body.downvotes = 0;
	voteItems.push(req.body);
	res.send(voteItems);
});
app.post("/vote/upvote/:id", function (req, res) {
	for (var i = 0; i < voteItems.length; i++) {
		if (voteItems[i].id === req.body.id) {
			voteItems[i].upvotes++;
		}
	}
	res.send(voteItems);
});
app.post("/vote/downvote/:id", function (req, res) {
	for (var i = 0; i < voteItems.length; i++) {
		if (voteItems[i].id === req.body.id) {
			voteItems[i].downvotes++;
		}
	}
	res.send(voteItems);
});