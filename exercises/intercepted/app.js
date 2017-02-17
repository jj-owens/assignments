var express = require("express");
var app = express();
var someMiddleware = require("./middleware/middleware")
var someObj = {
	"name": "whatever",
	"source": "somewhere",
	"power": "everything"
}

app.use(someMiddleware);


app.get("/", function (req, res, next) {

	req.send(someObj);
});

app.listen(8282, function () {
	console.log("server running on port 8282...")
});