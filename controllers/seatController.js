const colors = require("colors");

const { SeatModel } = require("../models/seatsModel");
const { SeatPricingModel } = require("../models/seatsPricingModel");

// Controller to get all seats ordered by seat class and include is_booked
const getSeatController = async (req, res) => {
  try {
    const data = await SeatModel.aggregate([
      { $sort: { seat_class: 1 } }, // Sort seats by seat class
      { $addFields: { is_booked: true } }, // Add the is_booked field
    ]);

    res.status(200).json(data);
  } catch (error) {
    console.log(`Error in Get All Seats: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get a seat by its ID
const getSeatControllerById = async (req, res) => {
  const { id } = req.params;

  try {
    const seat = await SeatModel.findById(id);
    if (!seat) return res.status(404).json({ error: "Seat not found" });

    const seatClass = seat.seat_class;
    const bookingCount = await SeatModel.countDocuments({
      seat_class: seatClass,
      is_booked: true,
    });

    console.log(bookingCount);

    const pricing = await SeatPricingModel.findOne({ seat_class: seatClass });

    let price;
    if (
      bookingCount <
      0.4 * SeatModel.countDocuments({ seat_class: seatClass })
    ) {
      price = pricing.min_price || pricing.normal_price;
    } else if (
      bookingCount <=
      0.6 * SeatModel.countDocuments({ seat_class: seatClass })
    ) {
      price = pricing.normal_price || pricing.max_price;
    } else {
      price = pricing.max_price || pricing.normal_price;
    }

    const seatDetails = {
      seat_identifier: seat.seat_identifier,
      seat_class: seat.seat_class,
      price,
    };

    res.status(200).json(seatDetails);
  } catch (error) {
    console.log(`Error in Get Seat Details: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to add a new seat
const postSeatController = async (req, res) => {
  const payload = req.body;
  try {
    await SeatModel.insertMany(payload);
    res.status(200).json("Seat Added successfully");
  } catch (error) {
    console.log(colors.bgRed.white(`Error in Controllers: ${error.message}`));
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to add a new seatPricing
const postSeatPricingController = async (req, res) => {
  const payload = req.body;
  try {
    await SeatPricingModel.insertMany(payload);
    res.status(200).json("Seat Pricing Added successfully");
  } catch (error) {
    console.log(colors.bgRed.white(`Error in Controllers: ${error.message}`));
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to delete a seat by its ID
const deleteSeatController = async (req, res) => {
  const { id } = req.params;
  try {
    await SeatModel.findByIdAndDelete(id);
    res.status(202).json(`This Seat ${id} is Deleted successfully`);
  } catch (error) {
    console.log(colors.bgRed.white(`Error in Controllers: ${error.message}`));
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


// Controller to delete a seat by its ID
const deleteSeatPricingController = async (req, res) => {
  const { id } = req.params;
  try {
    await SeatPricingModel.findByIdAndDelete(id);
    res.status(202).json(`This Seat Price Class of ${id} is Deleted successfully`);
  } catch (error) {
    console.log(colors.bgRed.white(`Error in Controllers: ${error.message}`));
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getSeatController,
  getSeatControllerById,
  postSeatController,
  postSeatPricingController,
  deleteSeatController,
  deleteSeatPricingController
};
