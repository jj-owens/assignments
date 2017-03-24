var express = require("express");
var authroutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authroutes.post("/signup", function (req, res) {
	User.find({
		email: req.body.email
	}, function (err, existinguser) {
		if (err) return res.status(500).send(err);
		if (existinguser.length) return res.send({
			success: false,
			messegse: "This name is already taken"
		}, function ())

		var newUser = new User(req.body);
		newUser.save(function (err) {
			if (err) return res.status(500).send(err);
			res.send({
				success: true,
				user: newUser,
				message: "Successfully signed up!"
			})
		})
	})
})