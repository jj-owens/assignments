var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid/v4");
var toDoList = [];
var path = require("path");

app.use(express.static(path.join("public")));

app.use(bodyParser.json());


app.listen(8181, function () {
	console.log("Listening on port 8181....");
});


app.get("/todo", function (req, res) {
	console.log(toDoList);
	res.send(toDoList);
});
app.get("/todo/:id", function (req, res) {
	console.log(req.body);
	for (var i = 0; i < toDoList.length; i++) {
		if (toDoList[i].id === req.body.id) {
			return res.send(toDoList[i]);
		}
	}
});

app.post("/todo", function (req, res) {
	console.log(req.body);
	req.body.id = uuid();
	toDoList.push(req.body);
	res.send(toDoList);
});


//This put function needs to be fixed.
/*app.put("/todo/:id", function (req, res) {
	console.log(req.body);
	for (var i = 0; i < toDoList.length; i++) {
		if (req.body.id === toDoList[i].id) {
			for (var j = 0; j < toDoList[i].length; j++) {
				if (toDoList[i][key] === req.body[key]) {
					toDoList[i][key].value = req.body[key].value;
				}
			}
		}
	}
	console.log(toDoList);
	res.send(toDoList);
});*/


app.delete("/todo", function (req, res) {
	console.log(req.body);
	for (var i = 0; i < toDoList.length; i++) {
		if (req.body.id == toDoList[i].id) {
			toDoList.splice(toDoList[i]);
		}
	}
	console.log(toDoList);
});