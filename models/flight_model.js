const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = new mongoose.Schema({
 
  flightNumber: {
    type: String,
    require: true, 
  },
  start: {
    type: String,
    require: true,
  },
  destination: {
    type: String,
    require: true,
  },
  departureTime : {
    type: String,
    require: true,
  },
  arrivalTime: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  travelDuration: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  }

})



module.exports = mongoose.model("Flight", userSchema);