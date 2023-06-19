const express = require("express");
const convertCSVtoJsonRouter = express.Router();

const {
  seatConverterController,
  seatPricingConverterController,
} = require("../controllers/dataConverterController");

// Route for converting seat data
convertCSVtoJsonRouter.get("/seat", seatConverterController);

// Route for converting seat pricing data
convertCSVtoJsonRouter.get("/seatPricing", seatPricingConverterController);

module.exports = { convertCSVtoJsonRouter };
