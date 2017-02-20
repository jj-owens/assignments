module.exports.addItem = function (req, res, next) {
	req.body.newSomething = "somethingElseHere";
	console.log(req.body.newSomething)
	next();
};