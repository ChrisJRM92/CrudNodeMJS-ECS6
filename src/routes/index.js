const express = require('express');
const router = express.Router();
const userRouter = require('./user.router')
const carRouter = require('./car.router')

router.use("/user", userRouter);
router.use("/car", carRouter);

module.exports = router;

