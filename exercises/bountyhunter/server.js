var express = require("express");
var uuid = require("uuid/v4")
var app = express();
var bodyParser = require("body-parser");
var bounties = ["something"];
var path = require("path");

app.use(express.static(path.join("public")))


app.use(bodyParser.json());

app.get("/bounty", function (req, res) {
	res.send(bounties)
});
app.get("/bounty/:id", function (req, res) {
	for (var i = 0; i < bounties.length; i++) {
		if (bounties[i].id === req.params.id) {
			return res.send(bounties[i]);
		}
	}
	res.status(404).send({
		message: "Not Found!"
	});
});

app.delete("/bounty/:id", function (req, res) {
	for (var i = 0; i < bounties.length; i++) {
		if (bounties[i].id === req.params.id) {
			bounties.splice(bounties[i]);
			res.send(bounties);
		}
	}
	res.status(404).send({
		message: "Not Found!"
	});
});

app.put("/bounty/:id", function (req, res) {
	console.log(req.params.id);
	for (var i = 0; i < bounties.length; i++) {
		console.log(bounties[i].id)
		if (bounties[i].id === req.params.id) {
			for (var key in bounties[i]) {
				bounties[i][key] = req[key];

			}

		}
	}
	return bounties[i] = req.body;

	res.status(404).send({
		message: "Not Found!"
	});
});


app.post("/bounty", function (req, res) {
	console.log(req.body);
	req.body.id = uuid();
	bounties.push(req.body);
	res.send(bounties);
});

app.put("/bounty", function (req, res) {

})

app.delete("/bounty", function (req, res) {
	bounties.splice(indexOf(req.body));
})


app.listen(8484, function () {
	console.log("App.js is listening on port 8484...");
});