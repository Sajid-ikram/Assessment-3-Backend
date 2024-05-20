let Flight = require("../models/flight_model");

const getAllFlight = async (req, res) => {
  const LIMIT = 8;
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  try {
    const flight = await Flight.find()
      .sort({ createdOn: -1 })
      .skip(skip)
      .limit(LIMIT);
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createFlight = async (req, res) => {
  try {
    const newFlight = Flight({
      flightNumber: req.body.flightNumber,
      start: req.body.start,
      destination: req.body.destination,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      travelDuration: req.body.travelDuration,
    });

    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// update user
const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findOne({ _id: req.query.id });
    flight.name = req.body.name;
    (flight.description = req.body.description),
      (flight.imageUrl = req.body.imageUrl),
      await flight.save();
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete user
const deleteFlight = async (req, res) => {
  try {
    await Flight.deleteOne({ _id: req.query.id });
    res.status(200).json({ message: "Flight is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllFlight, createFlight, updateFlight, deleteFlight };
