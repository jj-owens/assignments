var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var llamas = [];

app.use(bodyParser.json());

app.get("/api/people", function (req, res) {
	res.send({
		success: true,
		message: "It's working!",
		data: [{
			name: "jay",
			rank: "king"
		}]
	})
})


app.post("/", function (req, res) {

})

app.put("/", function (req, res) {

})

app.delete("/", function (req, res) {

})


app.listen(8484, function () {
	console.log("App.js is listening on port 8484...");
});