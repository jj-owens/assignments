var express = require("express");
var todoRouter = express.Router();
var Todo = require("../models/todo");

todoRouter.route("/")
	.get(function (req, res) {
		Todo.find(function (err, todos) {
			res.send(todos);
		});
	})
	.post(function (req, res) {
		var todo = new Todo(req.body);
		todo.save(function (err, newTodo) {
			if (err) res.status(500).send(err);
			res.status(201).send(newTodo);
		});
	});

todoRouter.route("/:todoId")
	.get(function (req, res) {
		Todo.findById(req.params.todoId, function (err, todo) {
				if (err) res.status(500).send(err);
				if (!todo) res.status(404).send("No item found with that Id.");
				else res.send(todo);
			})
			.put(function (req, res) {
				Todo.findIdAndUpdate(req.params.todoId, req.body, {
					new: true
				}, function (err, todo) {
					if (err) res.status(500).send(err);
					res.send(todo);
				});
			});
	})
	.delete(function (req, res) {
		Todo.findByIdAndRemove(req.params.todoId, function (err, todo) {
			if (err) res.status(500).send(err);
			res.send(todo);
		})
	});

module.exports = todoRouter;