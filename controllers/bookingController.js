const { SeatModel } = require("../models/seatsModel");
const { SeatPricingModel } = require("../models/seatsPricingModel");

// Controller function for creating a booking
const postBookingController = async (req, res) => {
  try {
    const { seatIds, name, phoneNumber } = req.body;

    // Check if the seats are available and not already booked
    const existingBookings = await SeatPricingModel.find({ seat_identifier: { $in: seatIds } });
    if (existingBookings.length > 0) {
      return res.status(400).json({ error: 'Seats already booked' });
    }

    // Create bookings for the selected seats
    const bookings = seatIds.map((seatId) => ({
      seat_identifier: seatId,
      seat_class: '', // Set the seat class based on your logic
      name,
      phoneNumber
    }));

    await SeatPricingModel.insertMany(bookings);

    // Calculate the total amount of the booking based on the seat prices
    const totalAmount = calculateTotalAmount(seatIds);

    res.json({ message: 'Booking created successfully', totalAmount });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function for retrieving bookings
const getBookingController = async (req, res) => {
  try {
    const { userIdentifier } = req.query;

    if (!userIdentifier) {
      return res.status(400).json({ error: 'User identifier is required' });
    }

    const bookings = await SeatPricingModel.find({ phoneNumber: userIdentifier });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { postBookingController, getBookingController };
