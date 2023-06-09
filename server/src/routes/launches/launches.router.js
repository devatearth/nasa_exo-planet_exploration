const express = require('express');
const { getAllLaunches } = require('./launches.contoller');
const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;