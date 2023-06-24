const mongoose = require("mongoose");

// Define the schema
const seatSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  seat_identifier: {
    type: String,
    required: true
  },
  seat_class: {
    type: String,
    required: true
  },
  is_booked : {
    type: Boolean,
    required: false
  }
});

// Create a Mongoose model based on the schema
const SeatModel = mongoose.model("Seat", seatSchema);

module.exports = { SeatModel };
