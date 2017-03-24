var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/login", function (req, res) {
    console.log(req.body);
    // Try to find the user with the submitted username
    User.findOne({username: req.body.username}, function (err, user) {
        console.log(req.body.username);
        if (err) res.status(500).send(err);

        // If that user isn't in the database:
        if (!user) {
            res.status(401).json({success: false, message: "User with the provided username was not found"})
        } else if (user) {

            // Check if the submitted password is the same as the one saved in the database
            if (user.password !== req.body.password) {
                res.status(401).json({success: false, message: "Incorrect password"})
            } else {

                // If username and password both match an entry in the database,
                // create a JWT! Add the user object as the payload and pass in the secret.
                // This secret is like a "password" for your JWT, so when you decode it
                // you'll pass the same secret used to create the JWT so that it knows
                // you're allowed to decode it.
                var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});

                // Send the token back to the client app.
                res.json({token: token, user: user.toObject(), success: true, message: "Here's your token!"})
            }
        }
    });
});

authRoutes.post("/signup", function (req, res) {
    User.find({username: req.body.username}, function (err, existingUser) {
        if (err) res.status(500).send(err);
        if (existingUser.length) res.send({success: false, message: "That username is already taken."});
        else {
            var newUser = new User(req.body);
            newUser.save(function (err, userObj) {
                if (err) res.status(500).send(err);
                res.send({user: userObj, message: "Successfully created new user.", success: true});
            });
        }
    })
});

module.exports = authRoutes;