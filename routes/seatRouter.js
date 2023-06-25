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
seatRouter.post("/seats", postSeatController);

// Post Route for SeatPricing
seatRouter.post("/seatPricing", postSeatPricingController);

// Delete Route for seats
seatRouter.delete("/seats/:id", deleteSeatController);

// Delete Route for SeatPricing
seatRouter.delete("/seatPricing/:id", deleteSeatController);

module.exports = {
  seatRouter,
};
