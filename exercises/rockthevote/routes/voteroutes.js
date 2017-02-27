var express = require("express");
var path = require("path");
var routes = express.Router();
var vote = require("../models/models");


routes.get("/vote", function (req, res) {
	vote.find(function (err, issues) {
		if (err) res.status(500).send;
		res.status(201).send(issues);
	});
});

routes.post("/vote", function (req, res) {
	req.body.upvotes = 0;
	req.body.downvotes = 0;
	console.log(req.body);
	var newVote = new vote(req.body);

	newVote.save(function (err) {
		if (err) res.status(500).send;
		res.status(201).send(newVote);
	});
});

routes.put("/vote/upvote/:id", function (req, res) {
	var id = req.body._id;
	vote.findOne({
		_id: id
	}, function (err, vote) {
		vote.upvotes++;
		if (err) res.status(500).send;
		vote.save(function (err) {
			if (err) res.status(500).send;
		});
		res.send(req.body);

	});

});

routes.put("/vote/downvote/:id", function (req, res) {
	var id = req.body._id;
	vote.findOne({
		_id: id
	}, function (err, vote) {
		vote.downvotes++;
		if (err) res.status(500).send;
		vote.save(function (err) {
			if (err) res.status(500).send;
		});
		res.send(req.body);

	});

});








module.exports = routes;



/*

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
});*/