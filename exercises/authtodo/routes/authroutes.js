var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/login", function (req, res) {
	User.findOne({
		username: req.body.username
	}, function (err, user) {
		if (err) return res.status(500).send(err);
		if (!user) {
			return res.status(401).send({
				success: false,
				message: "Invalid username or password!"
			})
		} else if (user) {
			if (user.password !== req.body.password) {
				return res.status(401).send({
					success: false,
					message: "Invalid username or password!"
				})
			} else {
				var token = jwt.sign(user.toObject(), config.secret, {
					expiresIn: "1h"
				});
				res.send({
					token: token,
					user: user.toObject(),
					success: true,
					message: "Token granted and sent!"
				});
			}
		}
	});

});

authRoutes.post("/signup", function (req, res) {
	User.find({
		username: req.body.username
	}, function (err, existingUser) {
		if (err) return res.status(500).send(err);
		if (existingUser.length) return res.send({
			success: false,
			message: "Username already exists, please choose another."
		});
	})
	else {
		var newUser = new User(req.body);
		newUser.save(function (err, userObj) {
			if (err) return res.status(500).send(err);
			res.send({
				user: userObj,
				message: "Successfully created new user!"
			});
		})
	}
})

module.exports = authRoutes;