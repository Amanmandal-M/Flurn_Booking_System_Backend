const express = require("express");
const bookingRouter = express.Router();

// Controller functions for the routes
const { getBookingController,postBookingController } = require("../controllers/bookingController");


// Retrieve Bookings
bookingRouter.get("/bookings", getBookingController);

// Create Booking
bookingRouter.post("/booking", postBookingController);

module.exports = { bookingRouter };
