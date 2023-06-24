const express = require("express");
const seatRouter = express.Router();

const {
  getSeatController,
  getSeatControllerById,
  postSeatController,
  postSeatPricingController,
  deleteSeatController,
} = require("../controllers/seatController");

// Get Route
seatRouter.get("/seats", getSeatController);

// Get Route by Id
seatRouter.get("/seats/:id", getSeatControllerById);

// Post Route for Seats
seatRouter.post("/seat", postSeatController);

// Post Route for SeatPricing
seatRouter.post("/seatPricing", postSeatPricingController);

// Delete Route for seats
seatRouter.delete("/seat", deleteSeatController);

// Delete Route for SeatPricing
seatRouter.delete("/seatPricing", deleteSeatController);

module.exports = {
  seatRouter,
};
