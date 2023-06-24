const mongoose = require("mongoose");

const seatPricingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  seat_class: {
    type: String,
    required: true,
  },
  min_price: {
    type: String,
    default: null,
  },
  normal_price: {
    type: String,
    required: true,
  },
  max_price: {
    type: String,
    default: null
  },
});

const SeatPricingModel = mongoose.model("SeatPricing", seatPricingSchema);

module.exports = { SeatPricingModel };
