const mongoose = require("mongoose");

// Define the schema
const seatPricingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  seat_class: {
    type: String,
    required: true
  },
  min_price: {
    type: Number,
    default: null
  },
  normal_price: {
    type: Number,
    required: true
  },
  max_price: {
    type: Number,
    required: true
  }
});

// Create a Mongoose model based on the schema
const SeatPricingModel = mongoose.model("SeatPricing", seatPricingSchema);

module.exports = { SeatPricingModel };
