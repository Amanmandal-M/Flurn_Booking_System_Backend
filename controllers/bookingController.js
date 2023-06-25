const { SeatPricingModel } = require("../models/seatsPricingModel");

// Controller function for creating a booking
const postBookingController = async (req, res) => {
  try {
    const { seatIds, name, phoneNumber } = req.body;

    // Check if the seats are available and not already booked
    const existingBookings = await SeatPricingModel.find({ seat_identifier: { $in: seatIds } });
    if (existingBookings.length > 0) {
      return res.status(409).json({ error: 'Seats already booked' });
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
    const totalAmount = await calculateTotalAmount(seatIds);

    res.status(201).json({ message: 'Booking created successfully', totalAmount });
  } catch (error) {
    console.error(error);
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

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const calculateTotalAmount = async (seatIds) => {
  try {
    // Fetch the seat pricing information for the selected seats
    const seatPricing = await SeatPricingModel.find({ seat_identifier: { $in: seatIds } });

    let totalAmount = 0;

    // Calculate the total amount based on the pricing information
    seatPricing.forEach((seat) => {
      // Determine the price based on the seat class and availability
      let price = 0;
      const seatsBookedPercentage = calculateSeatsBookedPercentage(seat); // Calculate the percentage of seats booked for the current seat

      if (seatsBookedPercentage < 40) {
        price = seat.min_price || seat.normal_price;
      } else if (seatsBookedPercentage >= 40 && seatsBookedPercentage <= 60) {
        price = seat.normal_price || seat.max_price;
      } else {
        price = seat.max_price || seat.normal_price;
      }

      // Add the price to the total amount
      totalAmount += parseFloat(price); // Adjust the calculation based on your specific logic
    });

    return totalAmount;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to calculate total amount');
  }
};

const calculateSeatsBookedPercentage = (seat) => {
  // Calculate the percentage of seats booked for the current seat based on your specific logic
  const totalSeats = 100; // Assuming there are 100 seats in total
  const bookedSeats = seat.bookedSeats.length; // Replace `bookedSeats` with the actual field that stores the booked seats for a given seat

  // Calculate the percentage
  const percentage = (bookedSeats / totalSeats) * 100;

  return percentage;
};

module.exports = { postBookingController, getBookingController };