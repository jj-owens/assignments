module.exports = function (req, res, next) {
	someObj.newSomething = "somethingElseHere";
	next();
};