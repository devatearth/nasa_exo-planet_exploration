const planets = require('../models/planets.model');

const getAllPlanets = async (req, res) => {
    res.status(200).json(planets);
    res.send();
};

module.exports = { getAllPlanets };