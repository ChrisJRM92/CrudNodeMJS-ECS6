const { getAll, create, getOne, destroy, update } = require('../controllers/car.controller');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/")
		.get(getAll)
		.post(create)

carRouter.route("/:id")
		.get(getOne)
		.delete(destroy)
		.put(update)

module.exports = carRouter;