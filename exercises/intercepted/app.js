var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var someMiddleware = require("./middleware/middleware");
app.use(bodyParser.json());
app.use("/", someMiddleware.addItem);


app.get("/", function (req, res, next) {
	console.log(req.body.newSomething)
	res.send(req.body);
});

app.listen(8282, function () {
	console.log("server running on port 8282...")
});